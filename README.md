# React Modal Hook

![gzip size](http://img.badgesize.io/https://unpkg.com/modal-hook/dist/index.js?compression=gzip)
[![npm version](https://img.shields.io/npm/v/modal-hook.svg)](https://www.npmjs.com/package/modal-hook)
[![npm downloads](https://img.shields.io/npm/dm/modal-hook.svg)](https://www.npmjs.com/package/modal-hook)

This is a React hook that displays a modal. The implementation is one file, it can be styled and it has no dependencies.

## Install

-   **Npm:** `npm install modal-hook --save-dev`
-   **Yarn:** `yarn add modal-hook --dev`

## Use

```jsx
import React from 'react';
import useModal from 'modal-hook';

const MyComponent() => {
        const [modal, openModal] = useModal(
            closeModal => (
                <div>
                    <h1>My Modal</h1>
                    <p>Content in modal</p>
                    <button onClick={closeModal}>
                        Close Modal
                    </button>
                </div>
            )
        )
        return (
            <div>
                <h1>My Page</h1>
                <p>Content on page</p>
                <button onClick={openModal}>
                    Open Modal
                </button>
                {modal}
            </div>
        )
    })
```

## Use Modal Result

```jsx
import React from 'react';
import useModal from 'modal-hook';

const MyComponent() => {
        const [modalElement, openModal] = useModal(closeModal => (
            <div>
                <div>{'Modal  Content'}</div>
                <button
                    onClick={() => closeModal('result of action in modal')}
                >
                    {'Close Modal'}
                </button>
            </div>
        ))
        return (
            <div className="App">
                <button onClick={() => openModal().then(console.log)}>
                    Open Modal
                </button>
                {modalElement}
            </div>
        )
    })
```

See the [examples](https://benshope.github.io/modal-hook) and the [examples source code](https://github.com/benshope/modal-hook/blob/master/stories.js) for more snippets to copy.

## Help

If there are any examples you'd like to see or use cases I didn't cover, please [file an issue](https://github.com/benshope/modal-hook/issues/new).
