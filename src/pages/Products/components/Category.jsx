import React from 'react'
import CategoryImage from './CategoryImage'
import CategoryLayout from './CategoryLayout'
import ImageTitle from 'components/Texts/ImageTitle'

const Category = ({ category, isActive, onClick }) => {
    return (
        <CategoryLayout isActive={isActive} onClick={onClick}>
            <ImageTitle className="title">
                {category.data.name}
            </ImageTitle>
            <CategoryImage
                src={category.data.main_image.url}
                alt={category.data.name}
            />
        </CategoryLayout>
    )
}

export default Category
