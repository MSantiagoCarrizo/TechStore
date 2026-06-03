import React from 'react'
import { Item } from './Item/Item'

export const ItemList = ({ data }) => {

    return (

        <div className='container my-4'>
            <div className='row g-4'>
                {
                    data.map((prod) => (
                        <div
                            key={prod.id}
                            className='col-12 col-sm-6 col-md-4 col-lg-3'
                        >
                            <Item producto={prod} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
