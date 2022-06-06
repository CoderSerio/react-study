import React from 'react'
import CSS from './Categories.module.css'

export default function Categories({categories, filterItems}) {
    return (
        <div className={CSS['btn-container']}>
            {
                categories.map((category, index) => {
                    return (
                        <button
                            type='button'
                            className={CSS['filter-btn']}
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button>
                    )

                })
            }
        </div>
    ) 
}

