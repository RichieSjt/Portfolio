import React, { useState, forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import { backdrop, modal } from '../../styles/UI/modal.module.scss'

const Backdrop = ({ onClose }) => {
    return <div className={backdrop} role='dialog' onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
    return <div className={modal}>{children}</div>
}

const Modal = forwardRef(({ children }, ref) => {
    const [display, setDisplay] = useState(false)
    const portalDestination = document.getElementById('overlays')

    useImperativeHandle(ref, () => {
        return {
            openModal: () => handleOpen(),
            closeModal: () => handleClose(),
        }
    })

    const handleOpen = () => setDisplay(true)
    const handleClose = () => setDisplay(false)

    if (!display)
        return null
        
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={handleClose} />,
                portalDestination
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalDestination
            )}
        </>
    )
})

export default Modal
