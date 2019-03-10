// @flow
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import useModal from './src'

const ipsum =
    "Lorem ipsum dolor amet dreamcatcher before they sold out copper mug pok pok whatever vinyl, offal woke scenester craft beer. Kombucha edison bulb air plant banh mi, vape raclette keytar etsy. Stumptown af asymmetrical succulents, man braid four loko banjo. Polaroid kinfolk poutine fixie street art typewriter schlitz mixtape bespoke squid adaptogen. Four dollar toast tote bag cardigan, taiyaki distillery af raw denim messenger bag put a bird on it jean shorts next level. Drinking vinegar tote bag artisan cronut 90's tbh keytar. Pug tilde 8-bit, fanny pack brunch polaroid kombucha dreamcatcher."

const renderModal = closeModal => (
    <div>
        <h1>Modal Header</h1>
        <p>{ipsum}</p>
        <button onClick={closeModal}>{'Close Modal'}</button>
    </div>
)

const stories = storiesOf('Modal', module)
    .add('default', () => {
        const [modalElement, openModal] = useModal(renderModal, { open: true })
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
    .add('required', () => {
        const [modalElement, openModal] = useModal(renderModal, {
            open: true,
            required: true,
        })
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
    .add('with promise', () => {
        const [modalElement, openModal] = useModal(
            closeModal => (
                <div>
                    <h1>Modal Header</h1>
                    <p>{ipsum}</p>
                    <button
                        onClick={() => closeModal('Result of actions in modal')}
                    >
                        {'Close Modal'}
                    </button>
                </div>
            ),
            { open: true }
        )
        return (
            <div className="App">
                <button onClick={() => openModal().then(action('closeModal'))}>
                    Open Modal
                </button>
                {modalElement}
            </div>
        )
    })
    .add('custom backdrop', () => {
        const [modalElement, openModal] = useModal(
            closeModal => (
                <div>
                    <h1>Modal Header</h1>
                    <p>{'Modal  Content'}</p>
                    <button onClick={closeModal}>{'Close Modal'}</button>
                </div>
            ),
            { open: true, style: { backdrop: { background: 'black' } } }
        )
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })

const modalTypeColors = {
    success: '#28a745',
    info: 'teal',
    warning: '#ffc107',
    error: '#dc3545',
}

Object.keys(modalTypeColors).forEach(type => {
    stories.add(type, () => {
        const [modalElement, openModal] = useModal(renderModal, {
            open: true,
            style: {
                backdrop: { background: 'rgba(0, 0, 0, 0)' },
                modal: {
                    background: modalTypeColors[type],
                    color: 'white',
                },
            },
        })
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
})
