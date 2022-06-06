import React, { useState } from 'react'
import Categories from '../components/Menu/Categories/Categories'
import MenuMain from '../components/Menu/MenuMain/MenuMain'
import items from '../components/Menu/data/items'

// 获取所有的类别，这个写法非常机智！
const allCategories = ['all', ...new Set(items.menu.map((oneItem) => oneItem.category))]

export default function Menu () {
    const [menuItems, setMenuItems] = useState(items.menu)
    const [categories, setCategories] = useState(allCategories)
    
    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(items.menu)
            return
        }
        const newItems = items.menu.filter((oneItem) => oneItem.category === category)
        setMenuItems(newItems)
    }
    return (
        <main>
            <img src="/assets/food/bread.jpg" alt="" />
            <section style={{textAlign:'center'}}>
                <div>
                    <h2 style={{textTransform:'capitalize', fontSize:'36px'}}>our menu</h2>
                    <div style={{width:'80px', backgroundColor:'orange',height:'5px', margin: '0 auto'}}></div>
                </div>
            </section>
            <Categories categories={categories} filterItems={filterItems}></Categories>
            <MenuMain items={menuItems}></MenuMain>    
        </main>
    )
}