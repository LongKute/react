import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/users.jsx";
import ProductPage from "./pages/products.jsx";
import "./style/global.css";
import TodoApp from "./components/todo/toDoApp.jsx";
const root = document.getElementById("root");
import ErrorPage from "./pages/error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // {
  //   path: "*",
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} >
//         <Route index element={<TodoApp />} />
//         <Route path="/user" element={<UserPage />} />
//         <Route path="/product" element={<ProductPage />} />
//       </Route>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />
//       <Route path="*" errorElement={<ErrorPage />} />
//     </Routes>
//   </BrowserRouter>
// );
