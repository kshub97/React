------------------JavaScript + React Learning Roadmap (Beginner to Pro)-----------
Step 1: Learn HTML & CSS (Basics of Web) - HTML: Structure with tags like \<div> , \<h1> , \<form> -
CSS: Styling with selectors, colors, layout, fonts, flexbox
Resources: - https://www.freecodecamp.org/learn/responsive-web-design/ - https://css-tricks.com/snippets/
css/a-guide-to-flexbox/

Step 2: Learn JavaScript (The Language React Uses) - Variables ( let , const ), functions, arrow
functions - Loops, arrays, objects, conditionals ( if/else , switch ) - DOM basics
Resources: - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide - https\://
www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

Step 3: Learn Modern JavaScript (ES6+) - Arrow functions: () => {} - Destructuring:
const { name } = user - Template literals: Hello \${name} - Spread/rest: [...arr] , ...props -
import / export , map , filter , reduce
Resources: - https://devhints.io/es6 - https://www.youtube.com/watch?v=IEf1KAcK6A8

Step 4: Start Learning React - JSX syntax - Functional components - Props and State - Event handling - List
rendering with .map()
Resources: - https://react.dev/learn - https://scrimba.com/learn/learnreact - https://reactjs.org/

Step 5: Intermediate React - useEffect hook - Forms and controlled components - Lifting state up -
React Router (navigation) - Project file structure
Resources: - https://www.w3schools.com/react/react_useeffect.asp - https://reactrouter.com/

Step 6: State Management (Context API or Redux) - Context API with useContext - Redux basics: store,
actions, reducers
Resources: - https://redux.js.org/tutorials/essentials/part-1-overview-concepts

Step 7: Build Projects to Practice - To-do list - Weather app (API calls) - Notes/blog app - Shopping cart -
Portfolio site
Resources: - https://www.frontendmentor.io/ - https://www.codementor.io/projects

Step 8: Deploy Your Projects (Optional) - Use Netlify, Vercel, or GitHub Pages - For full-stack (React +
Spring Boot), use AWS or Heroku
Tips: - Practice daily with mini projects - Learn by doing - Use browser dev tools - Use Google
and StackOverflow when stuck - Be patient — mastery takes time!

React + Spring Boot Full Stack Integration Guide

---

🚀 Objective:
Build and deploy a full stack application using React (frontend) and Spring Boot (backend).

---

✅ Tools Required
Tool Purpose
Java (JDK) Backend language
Spring Boot REST API backend framework
Maven Java build/dependency manager
Node.js JavaScript runtime
npm JavaScript package manager
React Frontend UI library
TypeScript Adds static typing to JS

---

✅ Project Structure
project-root/
├── backend/ --> Spring Boot App (Java)
│ └── src/main/java
│ └── src/main/resources/static (for frontend build)
├── frontend/ --> React App (JavaScript or TypeScript)
│ └── public/
│ └── src/

---

✅ Step-by-Step Guide

1. Create Backend (Spring Boot)
   • Use Spring Initializr or IntelliJ Spring Boot template
   • Include dependencies:
   o Spring Web
   o Spring Data JPA
   o Spring Security (optional)
   o MySQL/PostgreSQL Driver (if DB used)
   Run:
   cd backend
   mvn clean install
2. Create Frontend (React)
   npx create-react-app frontend
   cd frontend
   npm start
   Develop your React UI. Example API call:
   fetch("http://localhost:8080/api/users")
   .then(res => res.json())
   .then(data => console.log(data));
3. Build React for Production
   cd frontend
   npm run build
   This generates a /build folder with static HTML, CSS, JS.
4. Serve React from Spring Boot
   Copy contents of /frontend/build to /backend/src/main/resources/static
   cp -r frontend/build/\* backend/src/main/resources/static/
   Spring Boot will now serve index.html by default.
5. Run Spring Boot App
   cd backend
   mvn spring-boot:run
   Visit: http://localhost:8080

---

📅 Deployment (Option 1: All-in-One JAR)
• Use Elastic Beanstalk / EC2 to deploy backend/target/app.jar
• React UI is already inside the JAR in static/
• Access: https://your-elb-url.amazonaws.com
Option 2: Host Separately
• React on Netlify or Vercel
• Spring Boot on Elastic Beanstalk / EC2
• CORS must be configured for frontend to call backend

---

🔍 Dev vs Prod Checklist
Feature Dev Prod
React Server npm start (Node.js) npm run build -> Static
Spring Boot Embedded Tomcat Packaged .jar
CORS Enable localhost:3000 Set domain in CORS config
Environment .env.development .env.production

---

🔧 Useful Commands

# React

npx create-react-app frontend
npm install
npm start
npm run build

# Spring Boot

mvn clean install
mvn spring-boot:run

# Copy React build to Spring Boot

cp -r frontend/build/\* backend/src/main/resources/static/

---

🚀 Summary
• 🔧 Use Node/npm for React (frontend build)
• ⚡ Use Maven for Spring Boot (backend build)
• 🌐 Deploy either as one app or separately
• ✅ Keep environment configs separate
Purpose Java (Spring Boot) JavaScript (React)
Dependency manager Maven (or Gradle) npm (or yarn)
Central repo Maven Central npm registry
Config file pom.xml package.json
Add library <dependency> in XML npm install <lib>

# What you need to learn Why

JavaScript It’s the base language React is written in
React To build interactive UIs easily using JavaScript
JSX A React-specific syntax to write HTML in JS
(Later) Redux Optional – helps manage complex app data

---

🟣 What is TypeScript?
TypeScript is a superset of JavaScript that adds static typing.
✅ Think of it as JavaScript + types — like using int, string, boolean, etc. in Java.
Example:
let name: string = "Shubham";
let age: number = 25;
In regular JavaScript:
let name = "Shubham"; // No type check!

---

✅ TypeScript Benefits
Benefit How It Helps
Type safety Catch bugs before code runs
Better autocomplete IDE shows suggestions, improves DX
Easier refactoring Safer changes in large codebases
Works with React TSX files (TypeScript + JSX)

---

🔄 TypeScript + React
• create-react-app can be initialized with TypeScript:
npx create-react-app frontend --template typescript
• Files will be .tsx instead of .js or .jsx
• You define prop and state types explicitly
Example:
type Props = {
name: string;
}

const Hello: React.FC<Props> = ({ name }) => {
return <h1>Hello, {name}</h1>;
};

---

🤝 TypeScript and Spring Boot
• Spring Boot is already statically typed (Java), so TS is not needed directly
• But using TS on frontend + Java on backend = strong typing on both ends
• Optional: Use OpenAPI Generator to generate TypeScript models from Spring Boot APIs

---

🧠 Should You Learn TypeScript?
✅ If you already know JS/React → Yes, definitely! It makes you write cleaner, more maintainable code especially in large apps.

🤝 TypeScript with Spring Boot?
Not directly — Spring Boot is Java, so it’s already typed.
But in full-stack:
Frontend (React) = JavaScript → better with TypeScript
Backend (Spring Boot) = Java
Both sides now have typed code, improving API contract clarity
Optional: You can even use tools like Swagger Codegen or OpenAPI Generator to:
Generate TypeScript models from Spring Boot APIsEnsure your frontend and backend stay in sync

🔍 File/Folder Purpose
File/Folder Purpose
node_modules/ Auto-generated folder with all installed npm packages (don’t touch!)
public/ Contains index.html, favicon, images — static stuff served directly
→ index.html Main HTML file — React renders inside the <div id="root"> here
src/ Where you write your code (JS, JSX, CSS, components, etc.)
→ index.js Entry point — connects React to index.html and renders <App />
→ App.js Default root component — you edit this to build your UI
→ App.css Styles for App.js — you can keep or delete it
.gitignore Lists files to ignore in Git (like node_modules)
package.json Project metadata + dependencies + scripts (like start, build)
README.md Instructions and overview — useful when sharing the project
package-lock.json / yarn.lock Lock file — ensures consistent install of dependencies

✅ src/App.js (or your own file like test.js)
• This is the component that gets rendered first.
• You can edit this, or create a new file and import it.
✅ src/index.js
• This is the entry point of the React app.
• It renders <App /> (or any component you define) into the root div of index.html.
root.render(<App />);
✅ public/index.html
• This is a static HTML file.
• It has a special <div id="root"></div>.
• React will inject your app into that div.

✅ React File Flow (Simplified)
index.html
⬇
index.js
⬇
App.js → or any other custom components like test.js

Vite is a next-generation build tool for frontend projects like React, Vue, etc.
It’s faster and simpler than create-react-app (CRA).

Feature Vite Create React App (CRA)
🛠️ Build Tool Uses ESBuild (super fast) Uses Webpack (slower)
⚡ Speed (dev mode) Super fast ⚡ (instant reloads) Slower (bundles everything)
📁 Folder size Smaller Bigger
📦 Config Easier and cleaner Slightly more complex
🔧 Customization Simple to configure Harder unless ejected

🧪 How Vite Works
• It serves files on-demand, not all bundled up front.
• Uses native ES Modules in the browser for super fast dev experience.
• Uses ESBuild for lightning-fast builds instead of Webpack.

✅ How to Create a React App with Vite
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
📁 Vite File Structure
my-app/
├── index.html # Main HTML template. It has a special <!-- Vite injects here --> section.
├── src/
│ ├── main.jsx # Entry JS file — renders <App /> just like index.js in CRA
│ └── App.jsx # Main component where you build your UI
├── vite.config.js # Configures Vite (e.g. base URL, plugins, aliases)
├── package.json
└── ...

🧪 Example Comparison
✅ JSX version (easy to read):
function App() {
return (

<div>
<h1>Hello JSX</h1>
<p>This looks like HTML!</p>
</div>
);
}

JavaScript without JSX (harder):
function App() {
return React.createElement("div", null,
React.createElement("h1", null, "Hello JSX"),
React.createElement("p", null, "This looks like HTML!")
);
}

“Template” in React : a template(what type of project like JS ,typescript) is a pre-built project setup or code structure that helps you start faster.
It’s like a blueprint to scaffold a project with:
• Pre-configured files
• Required dependencies
• Boilerplate code (like App.jsx, main.jsx, etc.)
✅ Babel → A tool that converts JSX into regular JavaScript (React.createElement(...))

✅ JSX Rules & Tips (Must-Know)

1. 🧱 Wrap in a Single Parent Element
   JSX must return one single parent — like a <div> or <>...</> (Fragment).

2. 🏷️ Use className Instead of class
   Because class is a reserved keyword in JavaScript:

3. 🔁 Use {} to Run JavaScript in JSX
   You can embed variables or expressions inside {} in JSX.
4. 📌 Self-Closing Tags Must End with /
   Just like in XML, if a tag has no children, it must be closed like this: <img />, <input />

🧾 Summary
Concept Meaning Example
Expression JS code that returns a value {name}, {age + 1}
Attribute Tag property used to set values/config src="logo.png", className

🧠 Summary
Context Meaning
const obj = {} Creates an object

<p>{expression}</p>	Runs JS expression in JSX
()=> { ... }	Function code block
const {x} = obj	Destructuring object

✅ What is the Spread Operator?
The ... (three dots) is the spread operator.
It is used to unpack (spread) the elements of an array or properties of an object.

Use Case Example
Copy array const newArr = [...oldArr]
Merge arrays [...a, ...b]
Copy object const copy = { ...obj }
Update object { ...obj, newProp: value }
Pass props <Comp {...props} />

💡 Tip: CSS Selector Cheatsheet
Selector Matches
.className All elements with class
#idName The one element with that ID
.class1 .class2 .class2 inside .class1
.class a All <a> inside .class

🎨 6. How Do You Know When to Use What?

You Want To... Do This
Style a section Give it a className and write .className {} in CSS
Link to section via nav Give it an id (e.g., id="projects") and use href="#projects"
Reuse style across elements Use a class
Make it unique or scroll target Use an id
Style inside another element Use parent child selector in CSS (e.g., .header nav a)

# How to Read and Write the CSS

E.g .header-section nav a {
color: azure;
}
Find any <a> inside a <nav> that is inside an element with class header-section.
✅ It matches .header-section nav a.

Why Use className and Not id in CSS?
In React (and HTML):
• id: Should be unique on a page (used for navigation or specific targeting).
• class: Can be reused across multiple elements (used for styling).
In React's JSX, we write:
✅ className="header-section" instead of class="header-section"
✅ This maps to .header-section {} in your CSS.
💡 Why not use id in CSS?
• Because .className is more reusable
• #id is stronger (more specific), but not ideal for styling multiple elements
href={project.link}
• This is the link URL the anchor should open.
• In JSX (React), {} means “insert JavaScript expression”.
target="\_blank"
• Opens the link in a new browser tab.
• Common when linking to external websites.
rel="noopener noreferrer"
Used for security reasons when using target="\_blank".
Attribute Use
href Link URL
target="\_blank" Opens in new tab
rel="noopener" Protects against tab hijacking
rel="noreferrer" Hides referer info, also adds safety
Attribute Meaning
noopener Prevents the new tab from controlling the old one via window.opener
noreferrer Prevents the browser from sending the Referer header (protects origin)
✅ Best Practice: Always use rel="noopener noreferrer" with target="\_blank".

So what is link: "#" ?
• "#" is a placeholder URL.
• In HTML, href="#" means: "stay on the same page" or scroll to the top.
• It does nothing unless you’ve defined an anchor with that ID.
Value What Happens
"#" Stays on same page or scrolls to top
"#section" Scrolls to section with id="section"
Real URL Opens the real site
🧩 A function that returns JSX is called a Component.
function Header() {
return <h1>Hello, I’m a header!</h1>;
} This Header function is a React component.

# 🔹 Then what are props?

Props (short for properties) are how you pass data into a component.
function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}
// Usage
<Welcome name="Shubham" />
Here:
• Welcome → is a component
• name="Shubham" → is a prop passed to it
Destructure props: function Welcome({ name }) {
return <h1>Hello, {name}</h1>;
}
Concept Meaning
function Component() A React component that returns JSX
props The data passed to that component

✅ Rule 💡 Why / What it Means
Component function names must be PascalCase React treats lowercase tags as native HTML, like <div>
Every JSX must return a single parent element Wrap with <div> or <>...</>
Use className instead of class class is a reserved word in JavaScript
Self-closing tags when no children Example: <br />, <img />, <Header />
Props let you pass data to components Like function Welcome(props) or destructured ({ name })
State is for dynamic data (using useState) Will come as your next step
React is declarative Just define what you want UI to look like, not how to change DOM manually

# | Concept | Explanation |

| -------------- | ------------------------------------------------ |
| `props` | Object passed from parent → child |
| Immutable | Cannot be modified inside child |
| One-way flow | Data only flows down from parent to child |
| Destructuring | `{ name }` is a shorthand to extract prop fields |

📝 React Props & Components Cheat Sheet

# 🧠 React Props, Components, and PropTypes Cheat Sheet

## ✅ Component

- Function that returns JSX.
- Name **must start with a capital letter**.

```jsx
function MyComponent() {
  return <div>Hello</div>;
}
```

---

## ✅ Props

- Used to **pass data** from **parent to child**.
- **Immutable** inside child components.

```jsx
<MyComponent name="Alice" age={25} />
```

---

## ✅ Destructuring Props

- Cleaner way to access prop values.

```jsx
function MyComponent({ name, age }) {
  return (
    <p>
      {name} is {age}
    </p>
  );
}
```

---

## ✅ Boolean Props

- If you write just the name, it's treated as `true`.

```jsx
<MyComponent isMember /> // isMember = true
<MyComponent isMember={false} />
```

---

## ✅ Callback via Props

- Pass a function from parent, call it in child (e.g., button click).

```jsx
function Parent() {
  const handleClick = () => alert("Clicked!");
  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

---

## ✅ Spread Syntax (`...`)

- Shortcut to pass all object properties as props.

```jsx
const user = { name: "Alice", age: 30 };
<MyComponent {...user} />;
```

---

## ✅ PropTypes

- Used for type checking props at runtime in development.

```js
import PropTypes from "prop-types";

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

> ⚠️ Warning only appears in development mode, and in console. Not in UI.

---

## ✅ Common PropTypes

```js
PropTypes.string;
PropTypes.number;
PropTypes.bool;
PropTypes.array;
PropTypes.func;
PropTypes.object;
PropTypes.arrayOf(PropTypes.string);
PropTypes.shape({ key: PropTypes.string });
```

---

## 🔧 Developer Notes

- Install `prop-types` if not already installed:

```bash
npm install prop-types
```

- To ensure you're in development mode (for warnings to appear):

```bash
# For PowerShell (Windows)
$env:NODE_ENV="development"
npm run dev

# For Bash (Linux/macOS)
NODE_ENV=development npm run dev
```

# Hooks

✅ Data that changes over time → called state
✅ To do something when it loads, updates, or unmounts → that’s the lifecycle

#A Hook is a special function that lets you use React features like state, lifecycle, refs, etc. inside a function component.
Hooks are functions like useState() or useEffect().
You call them inside a functional component, and they “inject” React powers into your component (like state, side effects, etc.).

Before hooks:
You had to write class components to use features like state, componentDidMount, etc.

With hooks:
->Hooks = Functions to use React features (like state, lifecycle, etc.) in function components
->They start with the word use: like useState, useEffect, etc.
->You only use hooks inside components or custom hooks.

## const [count, setCount] = useState(0);

| Part                                                              | Meaning                                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `count`                                                           | Your **state variable** (initially `0`) count is a variable that stores data, |
| It can hold any type of data: number, string, array, object, etc. |
| `setCount`                                                        | A **function** that updates `count` and **triggers re-render**                |
| `useState(0)`                                                     | React sets up state with an initial value of `0`                              |

#### ✅ count is a state variable → it stores data that the UI depends on.

🔁 Whenever the data (value of count) changes via setCount(...), React re-renders the component to reflect the new data on screen.

🧠 Flow of how it works:
When the component first renders:
count is set to 0.
React remembers this value for this component instance.
When you call setCount(newValue):
React updates the value of count.
React re-renders the component.
The updated count value shows in the UI.
function Counter() {
const [count, setCount] = useState(0);
function handleClick() {
setCount(count + 1); // updates the state
}
return <button onClick={handleClick}>Clicked {count} times</button>;
}
-> handleClick() is triggered | setCount(count + 1) increases the count | React re-renders → button shows updated count

########-------------------------------------------------------
| Concept | Example | Type |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------- |
| Object destruct. | `const {name, age} = props` | Object destructuring |
| Array destruct. | `const [count, setCount] = useState(0)` | Array destructuring |
| Spread operator | `const newObj = {...oldObj}` | Not destructuring — it **copies** an object |
| Re-render | When state/props change, component runs again and UI updates | React behavior |

=> Each time state or props change, React automatically re-renders (i.e., re-executes) the function component to refresh the UI.
=> declare hooke outside of return statement

#State updates are asynchronous (delayed) is  - React doesn't update the state immediately. It waits, then updates after
       the function finishes running.
 E.g-   count - state variable which holds value , setCount -state updater function, call this functionto update
   const [count, setCount] = useState(0);
function increase() {
  setCount(count + 1);
  console.log("After update:", count); // Still shows old value!
   }
   return (
   <div>
      <p>{count}</p>       {/* UI shows updated count */}
      <button onClick={increase}>Increase</button>
   </div>
);
                  ||
=> ⏱ What Happens Step by Step
   Button clicked → increase() runs
   Inside increase():
   setCount(count + 1) is called
   React schedules the UI to re-render with new count
   But increase() is still running with the old count
   So console.log(count) logs the old value
   Then after increase() finishes, React re-renders the component
   Now count is updated in the new render
   So UI shows updated count, even though the old log is printed

#To resolve this use Update function(a simple function) : when you need the latest state, use it for updating multiple state :
   e.g -> setCount(prev => prev + 1);

# 🧩 What is batching? : React groups multiple state updates together to make the UI faster.
   Instead of re-rendering on every line: setA(...); | setB(...);
   It waits till both are done, then re-renders once.
   This is called batching – updating state in a batch to improve performance.

# setForm({
  ...formData,
  [name]: value
});

#It means:
Take all the current values from formData (...formData) | Replace (or add) the property with the key of name with the new value | This becomes the new state

# 💡 Thinking Tip:
Whenever you deal with form inputs like:
<input type="text"> |<input type="color"> | <select>

   use : onChange={(e) => {
  console.log(e.target.value); // always useful
}}

---------------------CSS-------------
 #Selectors:
   /* Target by element */
p { }

/* Target by class */
.container { }

/* Target by ID */
#main-title { }

/* Descendant selector */
.container p { }

/* Multiple selectors */
h1, h2, h3 { }

/* Pseudo classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }

/* Pseudo elements */
p::first-line { font-style: italic; }
