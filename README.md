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

## Use With Options

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
        ),
        {
            required: true,
            open: true,
            target: document.body,
            style: {
                modal: {
                    border: '5px solid black',
                },
                backdrop: {
                    background: 'teal',
                },
            },
        })
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

## Options

Customize the modal by passing these optional props to the second argument of `useModal`:

| Prop     | Description                                             |
| -------- | ------------------------------------------------------- |
| open     | initial open state of the modal                         |
| required | require the user to take an action shown in the modal to close it by disabling backdrop click |
| style    | style object overrides for `{modal, backdrop}`          |
| target   | the portal target - usually `document.body`             |

See the [examples](https://benshope.github.io/modal-hook) and the [examples source code](https://github.com/benshope/modal-hook/blob/master/stories.js) for more snippets to copy.

## Help

If there are any examples you'd like to see or use cases I didn't cover, please [file an issue](https://github.com/benshope/modal-hook/issues/new).
