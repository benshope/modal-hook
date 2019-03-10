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
        openModal()
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
    .add('close with promise resolve', () => {
        const [modalElement, openModal] = useModal(closeModal => (
            <div>
                <div>{'Modal  Content'}</div>
                <button
                    onClick={() => closeModal('Result of actions in modal')}
                >
                    {'Close Modal'}
                </button>
            </div>
        ))
        openModal().then(action('closeModal'))
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
                    <div>{'Modal  Content'}</div>
                    <button onClick={closeModal}>{'Close Modal'}</button>
                </div>
            ),
            null,
            { backdrop: { background: 'black' } }
        )
        openModal()

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
        openModal()
        return (
            <div className="App">
                <button onClick={openModal}>Open Modal</button>
                {modalElement}
            </div>
        )
    })
})
