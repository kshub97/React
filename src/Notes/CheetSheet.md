
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

-------------------------------React Router Hooks -------------------------------------------------
 # useLocation Hook : useLocation() gives you the current URL info (pathname, query params, hash, etc.) inside a component.(react router Dom library)
  #  📌 location object contains:
        pathname → current URL path (/about)
        search → query string (?id=10)
        hash → hash part (#section1)
        state → data passed during navigation
        key → unique ID for each navigation
# 🔥 Use Cases:
    Get current route info for analytics.
    Highlight active links in navbar.
    Read query parameters.
    Access navigation state between pages.

#  useNavigate Hook – useNavigate() is used to programmatically change routes (navigate between pages) from inside a component.
1️⃣ Basic navigation: 1️⃣ Basic navigation:
2️⃣ Replace history (no back button):navigate("/about", { replace: true });
3️⃣ Navigate with state (pass data): navigate("/about", { state: { from: "home" } });
4️⃣ Go back/forward in history:
    navigate(-1); // Go back
    navigate(1);  // Go forward
# 🔥 Use Cases:
    Redirect after form submission.
    Navigate after login/logout.
    Create back/next buttons.
    Navigate with dynamic params (e.g., /user/5).
#🔹 Why do we need useNavigate if we already have <Link> or routes?
<Link> is static navigation – it’s for clickable links that are always visible (like menus).

# useNavigate is for programmatic navigation – when you need to redirect the user after some action, like:
    ✅ After login, take them to the dashboard automatically.
    ✅ After form submission, send them to a success page.
    ✅ Redirect based on some condition (e.g., user not logged in → go to /login).
So:
<Link> = user clicks → navigate  | useNavigate = code decides → navigate

# 🔹 What is useParams? : useParams() lets you read dynamic route parameters from the URL.
    e.g <Route path="/user/:id" element={<User />} />
# 🔥 When to use which:
✅ useNavigate: Redirect after actions, conditional routing. | ✅ useParams: Get values from URL (user IDs, product IDs, etc.). | ✅ <Link>: Normal navigation buttons/menus.

# ❌ When <Outlet /> is removed:
    /about/team still changes the URL in the browser.
    But there’s no placeholder to render the child route, so the Team component doesn’t show up in UI.
    That's why it "stays on the same page" even though the URL updates.
# 💡 Why does Back to Home still work? : Because <Link to="/" /> navigates to the root route, which renders the Home component — not dependent on <Outlet />.

# 🆚  useSearchParams vs. useParams
    useParams = Reads path params from URL (/product/:id)
    useSearchParams = Reads query params (?key=value)

# ✅ Use useParams when:
You need required dynamic parts of the URL (path variables). /products/123 : You want 123 to represent a specific product ID.
    Good for: Product pages (/product/:id) | User profiles (/user/:username) | Anything where the value is part of the route itself.

# ✅ Use useSearchParams when:
    You need optional filters or state in the URL. /products?category=shoes&sort=price ->  You want to allow different combinations without changing the route path.
    Good for: Filtering/sorting (?sort=price) | Pagination (?page=2) | Sharing link with search state.
