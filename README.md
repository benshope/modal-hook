# Light React Modal

![gzip size](http://img.badgesize.io/https://unpkg.com/light-react-modal/dist/index.js?compression=gzip)

The idea behind this modal component is to keep it simple. The implementation is one file and it has no dependencies.

## Install

-   **Npm:** `npm install light-react-modal --save-dev`
-   **Yarn:** `yarn add light-react-modal --dev`

## Use

```
import useModal from 'light-react-modal';

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

See the [examples](https://benshope.github.io/light-react-modal) and the [examples source code](https://github.com/benshope/light-react-modal/blob/master/stories.js) for more snippets to copy.

## Help

If there are any examples you'd like to see or use cases I didn't cover, please [file an issue](https://github.com/benshope/light-react-modal/issues/new).
