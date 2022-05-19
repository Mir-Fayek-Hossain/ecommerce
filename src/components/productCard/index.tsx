import React from "react";
import { CardProps } from "../../App";
const ProductCard : React.FC <CardProps>=({title,category,price,description,image,rating})=>{
    return <> <div>
    <img src={image} alt="" width={300} />
    <h1>{title}</h1>
    <h1>{price}</h1>
    <h1>{description}</h1>
    <h1>{rating.rate}</h1>
    <h1>{category}</h1>
    </div> </>
}
export default ProductCard;