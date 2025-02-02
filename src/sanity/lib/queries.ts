import { groq } from "next-sanity";

export const allCars =groq `*[_type == "car"]{
    name,
    slug,
    priceperday,
    image {
    asset ->{
    _id,

    }
    }
} `;

export const order =groq `*[_type == "order"]{
          _id,
          firstName,
          lastName,
          phone,
          email,
          address,
          city,
          zipCode,
          total,
          discount,
          orderDate,
          status,
          cartItems[]->{
            productName,
            image
          }`;
