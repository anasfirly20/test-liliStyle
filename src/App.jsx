// Miscellaneous
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

// Pages
const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const CartDetail = lazy(() => import("./pages/CartById/CartById"));

// NextUI
import { Spinner } from "@nextui-org/spinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        <Suspense
          fallback={
            <section className="flex flex-col items-center justify-center min-h-screen">
              <Spinner size="lg" color="warning" />
            </section>
          }
        >
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<ShoppingCart />} />
            <Route path="/:id" element={<CartDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
