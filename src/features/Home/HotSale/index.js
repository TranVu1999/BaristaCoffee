import React from 'react'
import Title from './../../../commons/components/Title'

function HotSale({listHotSale}) {
    return (
        <section className="lst-product">
            <Title 
                smallTitle = "What Happens Here" 
                mainTitle = "Merchandise - Sale"
            />

            <div className = "cf-container">
                {listHotSale}
            </div>
        </section>

    )
}

export default HotSale
