// @flow
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import useModal from './src'

const stories = storiesOf('Modal', module)
    .add('default', () => {
        const [modalElement, openModal] = useModal(closeModal => (
            <div>
                <div>{'Modal  Content'}</div>
                <button onClick={closeModal}>{'Close Modal'}</button>
            </div>
        ))
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
    .add('custom backdrop', () => {
        const [modalElement, openModal] = useModal(
            closeModal => (
                <div>
                    <div>{'Modal  Content'}</div>
                    <button onClick={closeModal}>{'Close Modal'}</button>
                </div>
            ),
            null,
            { backdrop: { background: 'black' } }
        )
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })

const modalTypeColors = {
    success: 'green',
    info: 'teal',
    warning: 'yellow',
    error: 'red',
}

Object.keys(modalTypeColors).forEach(type => {
    stories.add(type, () => {
        const [modalElement, openModal] = useModal(
            closeModal => (
                <div>
                    <div>{'Modal  Content'}</div>
                    <button onClick={closeModal}>{'Close Modal'}</button>
                </div>
            ),
            null,
            {
                backdrop: { background: 'rgba(0, 0, 0, 0)' },
                modal: { background: modalTypeColors[type], color: 'white' },
            }
        )
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
})
