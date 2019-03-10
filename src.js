import React from 'react'
import ReactDOM from 'react-dom'

const backdropStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    transform: 'translateZ(0)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
}

const modalStyles = {
    position: 'fixed',
    padding: '2.5rem 1.5rem 1.5rem 1.5rem',
    backgroundColor: 'white',
    boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    left: '50%',
    top: '50%',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '30em',
    borderRadius: '0.25rem',
    maxHeight: 'calc(100% - 1em)',
}

const useModal = (modalCreator, target, styles) => {
    let openModal
    let resolveCallback
    const Modal = () => {
        const [isModalOpen, setModalOpen] = React.useState(false)
        openModal = () => {
            setModalOpen(true)
            return new Promise(r => {
                resolveCallback = r
            })
        }
        const closeModal = resolveWith => {
            setModalOpen(false)
            resolveCallback(resolveWith)
        }
        const modalRef = React.useRef()
        return isModalOpen
            ? ReactDOM.createPortal(
                  React.createElement(
                      'div',
                      {
                          className: 'modal-background',
                          onClick: e => {
                              modalRef.current &&
                                  !modalRef.current.contains(e.target) &&
                                  setModalOpen(false)
                          },
                          style: {
                              ...backdropStyles,
                              ...((styles && styles.backdrop) || {}),
                          },
                      },
                      React.createElement(
                          'div',
                          {
                              className: 'modal-wrapper',
                              ref: modalRef,
                              style: {
                                  ...modalStyles,
                                  ...((styles && styles.modal) || {}),
                              },
                          },
                          modalCreator(x => closeModal(x))
                      )
                  ),
                  target || document.body
              )
            : null
    }
    const modal = React.createElement(Modal)
    return [modal, () => openModal()]
}

export default useModal
