import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import { useState } from "react"
import Currency from 'react-currency-formatter'
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product( {id, title, category, image, description, price} ) {
  const [rating] = useState(
    Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
  )
  const [hasPrime] = useState(
    Math.random()<0.5
  )
  return (
    <div className = 'bg-white relative flex flex-col m-5 z-30 p-10'>
        <p className = 'absolute top-2 right-2 text-sm text-gray-400 font-extralight'>{category}</p>
    
        <Image 
        src = {image}
        height = {200}
        width = {200}
        objectFit ='contain'
        />
        <h4 className ='my-3 '>{title}</h4>
        <div className = 'flex text-yellow-500'>
          {Array(rating).fill().map((_,i)=>(
          <StarIcon  className = 'h-5'/>
          ))}
        </div>
    
        <p className = 'text-xs my-2 line-clamp-2'>{description}</p>
        <div className = 'mb-5'>
          <Currency
            quantity = {price}
            currency = "ETB"
          />
        </div>
        {hasPrime && (
          <div className ='flex items-center space-x-2 -mt-5'>
            <img className ='w-12' src = 'https://links.papareact.com/fdw' alt="" />
            <p className = 'text-sm text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
        <button className = 'mt-auto btn'>Add to Cart</button>
    </div>
  )
}
export default Product