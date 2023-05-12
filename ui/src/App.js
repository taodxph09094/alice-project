import "./App.css";
import "./assets/css/custom.css";

import HomePageLayout from "./layouts/HomePageLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Products from "./pages/home/products";
import Cart from "./pages/home/cart";
import Checkout from "./pages/home/checkout";
import ProductDetail from "./pages/home/products/ProductDetail";
import Login from "./pages/auth";
import Dashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/userAction";
import store from "./store";
import axios from "axios";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import WhiteList from "./pages/home/whitelist";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      {/* {isAuthenticated} */}
      <Switch>
        {/* <Route exact path="/admin">
          <AdminLayout />
        </Route> */}
        <Route exact path={["/admin", "/admin/dashboard", "/admin/products"]}>
          <AdminLayout>
            <ProtectedRoute
              isAdmin={true}
              exact
              path="/admin/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              isAdmin={true}
              exact
              path="/admin/products"
              component={AdminProducts}
            />
          </AdminLayout>
        </Route>
        <Route exact path="/">
          <HomePageLayout />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/product">
          <ProductDetail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <ProtectedRoute exact path="/whitelist">
          <WhiteList />
        </ProtectedRoute>
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute exact path="/checkout" component={Checkout} />
          </Elements>
        )}

        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
