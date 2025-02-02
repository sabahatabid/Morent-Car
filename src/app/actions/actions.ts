import { car } from "../../../types/cars";

export const addToCart = (setCars : car)=>{
    const cart : car[] =JSON.parse(localStorage.getItem('cart') || '[]')

    const existingCarIndex = cart.findIndex(item =>item._id === item._id)

    if(existingCarIndex > -1) {
        cart[existingCarIndex].transmission += 1
    }
    else {
        cart.push({
            ...setCars, transmission: 1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
export const  removeFromCart =(carId : string) =>{
    let cart: car[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart= cart.filter(item=> item._id !== carId)
    localStorage.setItem('cart',JSON.stringify(cart))
}
export const updateCartQuantity =(carId : string, quantity :number)=>{
    const cart : car[] =JSON.parse(localStorage.getItem('cart') || '[]')
    const carIndex =cart.findIndex(item =>item._id === carId)

    if(carIndex > -1){
        cart[carIndex].transmission =quantity;
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}
export const getCartItems = (): car[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}