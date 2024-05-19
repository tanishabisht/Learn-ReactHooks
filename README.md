# Learn - React Hooks
This is the second project in a seven-part series aimed at improving your React development skills. This repository focuses on teaching you how to use the three most common React hooks—`useState`, `useEffect`, and `useContext`. These hooks enable the use of state and other React features in functional components without writing a class.


## Getting Started with the Application
To run the application, follow these instructions:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - `npm start`


## React Learning Series
This project is part of a comprehensive learning series:
1. [React application for user listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks) (this repository)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement)
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI)
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux)
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization)
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder)


## Fundamental Rules of Hooks
- **Top Level Only:** Always use hooks at the top level of your React functions. Do not call hooks inside loops, conditions, or nested functions.
- **React Functions Only:** Hooks should only be used within React functional components, not in regular JavaScript functions.


## Overview of Key Hooks
### `useState`
- **Purpose:** Enables state management in function components
- **Features:**
  - Declare state of any type (e.g., strings, numbers, arrays, objects).
  - Update state based on previous state by passing a function to the setter function. [Code](./src/Components/useState/HooksCounter2.js)
  - Manage [arrays](./src/Components/useState/HooksCounter4.js) and [objects](./src/Components/useState/HooksCounter3.js) using the spread operator to ensure proper updates.
- **Syntax Example:** `[state, setState] = React.useState('initialValue')`


### `useEffect`
- **Purpose:** Allows you to perform side effects (i.e. updating the DOM, fetching data from API endpoints, setting up subscriptions / timers) in your component.
- **Syntax Example:** `useEffect(func1, [])`
- **Features:**
  - **Function Execution:** By default, func1 runs after every component render but can be controlled with dependencies. [Code](./src/Components/useEffect/1_ChangeTitle.js)
  - **Cleanup Function:** Optional return that acts as a cleanup mechanism. [Code](./src/Components/useEffect/3_MousePosition.js)
  - **Dependency Array:** Specify variables that control the re-invocation of the effect. Conditionally firing an effect. [Code](./src/Components/useEffect/2_ConditionallyCallUseEffect.js)
  - **Fetching data:** See [Data Fetching Example](./src/Components/useEffect/4_DataFetching.js) which demonstrates using `axios` for API requests.


### `useContext`
- **Purpose:** Provides a way to share values like props but across the entire component tree, without manually passing props to every level.
- **Implementation:**
  - Initialize context values: [Component 1 Example](./src/Components/useContext/Component1.js)
  - Use context values: [Component 3 Example](./src/Components/useContext/Component3.js)