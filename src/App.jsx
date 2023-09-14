// Miscellaneous
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

// Pages
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import CartById from "./pages/CartById/CartById";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
        />
        <Suspense
          fallback={
            <section className="flex flex-col items-center justify-center min-h-screen">
              <RingLoader color="#3a6afd" />
            </section>
          }
        >
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<ShoppingCart />} />
            <Route path="/:id" element={<CartById />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
