import Image from "next/image"

function Product( {id, title, category, image, description, price, rating} ) {
  return (
    <div className = 'bg-white'>
        {category}
    
        <Image 
        src = {image}
        height = {200}
        width = {200}
        objectFit ='contain'
        />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default Product