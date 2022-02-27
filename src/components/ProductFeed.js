import Product from './Product'
function ProductFeed({ products }) {
  return (
    <div>   
        {products.map(({id, title, category, image, description, price, rating})=>(
            <Product 
            key = {id}
            title= {title}
            category = {category}
            image ={image}
            description = {description}
            price = {price}
            rating = {rating}

            />
        ))}
    </div>
  )
}

export default ProductFeed

