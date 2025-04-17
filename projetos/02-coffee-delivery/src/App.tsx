import { ThemeContextProvider } from "./contexts/Theme/ThemeContextProvider";
import { LocationContextProvider } from "./contexts/Location/LocationContextProvider";
import { CartContextProvider } from "./contexts/Cart/CartContextProvider";
import { OrderContextProvider } from "./contexts/Order/OrderContextProvider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <ThemeContextProvider>
      <LocationContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <BrowserRouter>
              <Router></Router>
            </BrowserRouter>
          </OrderContextProvider>
        </CartContextProvider>
      </LocationContextProvider>
      <ToastContainer />
    </ThemeContextProvider>
  );
}
