
# 🔹 What is Routing in React?
Routing = deciding which component to show based on the URL.

👉 Example:
/ → Show Home component
/about → Show About component
In React, react-router-dom handles this.

# 🔹 What does <Route> expect?
    A <Route> has a prop called element. ➡️ A single path → component mapping.
    element must be a React element (something like <Home />)
    NOT a plain function reference (Home)
    * path="/" → URL pattern.
    * element={<Component />} → What to render.

    👉 This is why React says "Functions are not valid as React child" when you pass just {Home}.

# <Route> is also a React component. It has props like:
    path → which URL to match |  element → which component to render

# 🔹 What is a prop?
    Prop = Property  | Props are inputs you pass to a React component. | Think of them like arguments to a function.


<Route path='/' element={Home}/> : Here you are passing Home (just the function). React expects an element, not the raw function. That’s why it throws:
Functions are not valid as a React child.
Meaning ; Home  -------->   [Function definition in memory]
                  function Home() {
                    return <h1>Home Page</h1>;
                  } //✅ You are passing the function reference itself, not calling it. ❌ React doesn’t know how to display a raw function → gives "Functions are not valid as React child".


# 🔹 What React expects:
 <Route path='/' element={<Home />}/>
    <Home /> calls your Home component and creates a JSX element. Home without < > is just a reference to the function, not something React can render.
Meaning : <Home />  ------>   [JSX Element created by React]
                  {
                    type: Home,
                    props: {}
                  }//✅ React calls the Home() function internally ✅ Converts the returned <h1> into a real DOM element ✅ That’s why it works.


# 🔑 Remember:
Component function: Home → Just a function. |  Component element: <Home /> → An actual element React can render.
# 🔑 Analogy:
    Home = A recipe for making a cake (instructions only) | <Home /> = A cake baked using the recipe (something you can actually eat)

 # Nested Routes :➡️ Routes inside other routes for layouts or sections.

 # 🔹 Outlet ➡️ Placeholder where nested child route will be rendered.
 # 🔹  Index Route ➡️ Default child route for nested routes. : <Route path="/dashboard" element={<Dashboard />}>
                                                                  <Route index element={<Welcome />} /> {/* default */}
                                                               </Route>

 #  Wildcard Route ➡️ For 404 pages. : <Route path="*" element={<NotFound />} />

 # 📌 Summary of Terms:
    Routing: Mechanism to map URL → Component.
    Route: Defines one URL → Component.
    Navigation: Moving between routes.
    Nested Routes: Routes inside routes for layouts.
    Outlet: Where child routes render.
    Index Route: Default child route.
    Wildcard: Catch-all route for invalid URLs.