import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import CustomizePage from "./pages/Customize-page";
import FaqPage from "./pages/Faq-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/customize",
    element: <CustomizePage />,
  },
  {
    path: "/FAQ",
    element: <FaqPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
