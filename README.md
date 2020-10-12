# Rules of HOOKS
- **Only call hooks at the top level** and don't call hooks inside loops, conditions or nested functions
- **Only call hooks from React functions**: call from within react functional components and not just any regular JS function



# useState()
- Returns an array as shown: <br/>
`[state, setterFunction] = React.userState('')`

- Executing the setter function in a function call, causes our program to re-render

- Lets you add states to functional components

- In classes states were only in object form. Using hooks states can be of any data type e.g. string, boolean, array etc.

- If the newState value depends on the [prevState](./src/Components/useState/HooksCounter2.js) value, pass function to the setter function with prevState as the parameter

- Use spread operator when working with [arrays](./src/Components/useState/HooksCounter4.js) or [objects](./src/Components/useState/HooksCounter3.js) as it doesnt automatically merge and update.



# useEffect()
- Lets you perform side effect (i.e. updating the DOM, fetching data from API endpoints, setting up subscriptions / timers)

- For those who are familiar with class components, this hook is a close replacement for 
  - componentDidMount
  - componentDidUpdate
  - componentDidUnmount

- `useEffect(func1, [])`

  - **func1:** this function is executed after every render of the component (if the second parameter is not passed). It will act as *componentDidMount + componentDidUpdate*
  [code](./src/Components/useEffect/1_ChangeTitle.js)

  - **return value of func1:** is another function called as **cleanUp function**. This function acts as *componentDidUnmount*.
  [code](./src/Components/useEffect/3_MousePosition.js)

  - **Array:** contains all the props/state whose value we want to change on every render of the function component. Those props/state will act as *componentDidMount + componentDidUpdate*. 
  [code](./src/Components/useEffect/2_ConditionallyCallUseEffect.js)

    - NOTE: if empty array is passed func1 will be executed only in the first render and useEffect will act as *componentDidMount*
    [code](./src/Components/useEffect/3_MousePosition.js)

- [Code](./src/Components/useEffect/4_DataFetching.js) for a practical and common usecase example of useEffect() to fetch data from an API. This uses external dependancy called [axios](https://www.npmjs.com/package/axios) that is most popular depandancy that makes API manipulation easy.



# useContext()
- provides us a way to pass data through the component tree without having to pass props down manually at every entry level
- [Here](./src/Components/useContext/Component1.js) the context values are initialized and later [here](./src/Components/useContext/Component3.js) the context values are used.

# How are the files arranged