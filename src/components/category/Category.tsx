import React from 'react'
import './Category.style.css'
import {FaBars} from 'react-icons/fa'

const Category = () => {
    return (
        <div className="category-container">
            <div className="category">
                <div className="categoty-item mx-3"><FaBars className="ml-1"/>دسته‌ بندی‌ محصولات</div>
                <div className="categoty-item mx-3">خوار و بار</div>
                <div className="categoty-item mx-3">لبنیات</div>
                <div className="categoty-item mx-3">پروتئینی</div>
                <div className="categoty-item mx-3">نوشیدنی</div>
            </div>
        </div>
    )
}

export default Category
