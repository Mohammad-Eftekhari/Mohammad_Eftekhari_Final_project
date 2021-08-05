import React from 'react'
import './Category.style.css'
import {FaBars} from 'react-icons/fa'
import {CategoryData} from "../../Data/CategotyData"

const CategorySection = () => {
    return (
        <div className="category-container">
            <div className="category">
                {/* <div className="categoty-item mx-3"><FaBars className="ml-1"/>دسته‌ بندی‌ محصولات</div> */}
                {
                    CategoryData.map((item,index)=> (
                        <div key={index} className="categoty-item mx-3">{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySection
