import React from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.pngF'


const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div>
        <div>
            <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>
        <div>
            <h1>{product.name}</h1>
            <div>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div>
                <div>${product.old_price}</div>
                <div>${product.new_price}</div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                nemo minus autem quas enim voluptas, soluta voluptatem? Dolore quibusdam
                accusantium, vero illum facilis sunt dolores?
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
