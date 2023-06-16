# React with Redux

This is the record for my learning journy of Udemy class "Modern React with Redux Toolkit" byStephen Grider.

# 1. Let's Dive in!

## aim: finish a traslation app

Link:https://codesandbox.io/s/react-forked-584jmr?file=/src/App.js

- what is react all about?
  (1)display html
  (2)changes that html when user does something

we tell react what content we want to show by creating fucntions that return JSX(kind of looks like html)

the functions that return JSX are refer to COMPONENTS, later we will learn how these components working together.

for example: the little app we made has five conponents(app, flower, translate, field...). JSX tells react to create a normal HTML element(with lower case) or show another component(with first letter capitalized).

- how does a react app start up?

1. All the react file will be squized into a Bundle.js and placed onto a server.
2. User makes a request to the server and get an HTML file(index.html) + the bundle.
3. User's browser executes our code.
   reference to a div with id="root"

- what are the 'useState' functions?
  ** useState is a fucntion that works with React's "state" system
  ** state is like a variable in React
  ** state is used to store data that changes over time
  ** whever state changes, React automatically updates content on the screen.
  in this app, for example, there are 3 data changed(text user typed, language user choose, result of translation)

- how did the text get translatedto another language?

Text input+ selected language ====> translate component(network request with the new text) ======> google translate app

- creat react app

  ```
  npx create-react-app <project_name>
  ```

  change into project folder

  run **npm start**

这个流程，建立一个 react app 意味着什么？files in our project(app.js, index.js... ) these are not understandable by browser. 所以我们有 dev server 去帮我们把 jsx 转换成 js，用两个工具 Babel(turn jsx to normal js) & Webpack(merge all projects files into a single file: bundle.js)

# 2. Creating Content with JSX!

- five steps of creating conponent and shows on screen (index.js)
- <h1>Hi there!</h1> this doesnt make anything show up in the browser. This creats an instruciton for React telling it to make an element. we have to return it from a component for React to use it.

* we can create JS variable and reder it inside JSX with {}
  (but react dont know how to render a boolean variable, it will show nothing)
  (Object are not valid JSX children, you can not render an Object in JSx, it will pop up error)
  (const message = [1,2,3], return <h1>{message}</h1>) // result is 123

* props is like attributes in html
