import React from 'react'
import Image from './Grid/Image';
import ImageInfo from './Texts/ImageInfo';


const Product = ({ title, url, category, price }) => {
    console.log(title, url, category, price);
    return (
        <Image url={url} title={title} >
            <ImageInfo>{category} - {price}$</ImageInfo>
        </Image>
    )
}

export default Product
