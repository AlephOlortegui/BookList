# netnNinja Booklist purple

- Link GitHub Repo: https://github.com/iamshaunjp/react-context-hooks/tree/lesson-21/booklist/src

# steps

- initial view

## Versus

```bash
  let initialState = []                                                 ||  NO initialState
  export const BookContext = createContext(initialState)                ||  export const BookContext = createContext()  
                                                                        ||
  export const BookProvider = ({children}) => {                         ||
    const [books, dispatch] = useReducer(BookReducer, initialState)     || const [books, dispatch] = useReducer(bookReducer, [])
```

### ChatGPT said
- The createContext() function creates a new context object, but it doesn't require an initial value
- If you don't pass an initial value to createContext(), the default value of the context will be undefined.
- ***However, this default value is not used when you provide a value explicitly using BookContext.Provider.***

In your BookProvider component, you are using BookContext.Provider 
to wrap the children components and provide the books value using the value prop:

```bash
    <BookContext.Provider value={{
          books
        }}>
          {children}
    </BookContext.Provider>
```
By providing the books value as the value prop of the BookContext.Provider, 
you are effectively passing the value to all child components that consume 
the BookContext using useContext(BookContext). 

- **The value passed to the BookContext.Provider takes precedence over the default value (undefined) of the context.**

In summary, the createContext() function creates a context object without requiring an initial value.

## LocalStorage to BookContext
The useReducer hook takes three parameters: 
the reducer function, the initial state, and an optional initializer function.
```bash const [state, dispatch] = useReducer(reducer, initialState, initializer);```

- reducer: The reducer function is a function that takes the current state and 
  an action, and returns the new state based on the action. It defines how state 
  updates should be performed in response to different actions.
- initialState: The initialState is the initial value of the state. It can be 
  any valid JavaScript value and represents the initial state of the component.
- **initializer** ***(optional)***: The initializer is an optional function 
  that allows you to perform some initialization logic to derive the initial state value. It is called once during the initial render. If provided, 
  the initializer function should return the initial state value.