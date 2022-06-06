// 这里涉及到了动态引入本地图片的问题
// 其实把assets放到public下，./就能访问了
import React from 'react'
// 标签选择器竟然可以直接生效
import CSS from './MenuMain.module.css'


export default function MenuMain({items}) {
    return (
        <div className={CSS['section-center']}>
            {
                items.map((menuItem, index) => {
                    const { id, title, img, price, desc } = menuItem
                    return (
                        <article key={id} className={CSS['menu-item']}>
                            <img src={img} alt={title} className={CSS['photo']} />
                            <div className={CSS['item-info']}>
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className={CSS['price']}>${price}</h4>
                                </header>
                                <p className={CSS['item-desc']}>
                                    {desc}
                                </p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    ) 
}

