import React from 'react'
import CategoryImage from './CategoryImage'
import ImageTitle from 'components/Texts/ImageTitle'

const Category = ({ category }) => {
    return (
        <>
            <ImageTitle>
                {category.data.name}
            </ImageTitle>
            <CategoryImage
                src={category.data.main_image.url}
                alt={category.data.name}
            />
        </>
    )
}

export default Category
