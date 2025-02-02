"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { car } from "../../../types/cars";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<car[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items || []);
    };

    fetchCartItems();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceperday * item.transmission,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      address: !formValues.address.trim(),
      city: !formValues.city.trim(),
      zipCode: !formValues.zipCode.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };
  

  const handlePlaceOrder = async() => {

   Swal.fire ({
   title:"Processing your order...",
   text:"Please wait a moment.",
   icon:"info",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   //cancelButonColor: "#d33",
   confirmButtonText: "Proceed",
  }).then((result)=> {
  if(result.isConfirmed){
  if(validateForm()){
  localStorage.removeItem("appliedDiscount");
  Swal.fire(
    "Success!",
    "Your order has been successfully processed!",
    "success"
  );
  } else {
   Swal.fire(
    "Error!",
    "Please fill in all the fields before proceeding.",
    "error"
   );
  }
  }
  });
     const orderData= {
        _type:'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        cartItems: cartItems.map(item =>({
          _type: 'reference',
          _ref: item._id,
        })),
        total: total,
        discount: discount,
        orderDate: new Date().toISOString
     };

     try{
      await client.create(orderData)
      localStorage.removeItem("appliedDiscount")
     } catch (error) {
      console.error("error creating order", error)
     }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item,index) => (
                <div
                  key={item._id || index}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.transmission}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.priceperday * item.transmission}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(formValues).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    id={key}
                    placeholder={`Enter your ${key}`}
                    value={formValues[key as keyof typeof formErrors]}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                  />
                   {formErrors[key as keyof typeof formErrors] && (
                   <p className="text-sm text-red-500">
                  {`${key.charAt(0).toUpperCase() + key.slice(1)} is required.`}
                 </p>
                  )}
                
                  {formErrors.firstName && (
                    <p className="text-sm text-red-500">
                      {`${key.charAt(0).toUpperCase() + key.slice(1)} is required.`}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

