import React from 'react'
import { tag } from '../../styles/UI/tag.module.scss'

const Tag = ({ children }) => {
    return (
        <p className={tag}>
            {children}
        </p>
    )
}

export default Tag