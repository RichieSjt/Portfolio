import React from 'react'
import { card } from '../../styles/UI/card_primary.module.scss'

const CardPrimary = ({ children }) => {
    return (
        <div className={card}>
            {children}
        </div>
    )
}

export default CardPrimary