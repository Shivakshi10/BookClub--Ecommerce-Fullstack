import Home from "./pages/Home";
import "./app.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Link, Navigate,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes, } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Categories from "./components/Categories";
let current = "";

const Layout = () => {
  const user = useSelector(state=>state.user.currentUser);
current=user;
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/:id/Cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      
    ],
  },
  {
    path:"/register",
    element: current ?<Navigate to="/" /> :<Register />
  },
  {
    path:"/login",
    element:current ? <Navigate to="/" /> :<Login />
  }
]);


function App() {

    const user = useSelector((state) => state.user.currentUser);
    return (
      <Router>
        <Routes>
           <Route  path="/" element={<Home />}> 
            
          </Route>
          <Route path="/products/:category" element={<Products />}>
            
          </Route>
          <Route path="/product/:id" element={<Product />}>
            
          </Route>
          <Route path="/cart" element={<Cart />}>
            
          </Route>
          <Route path="/success" element={ <Success />}>
           
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
          <Route path="/register"
           element= {user ? <Navigate to="/" />: <Register />}>
          </Route>
        </Routes>
         
        
      </Router>
    
  );
}

export default App;
