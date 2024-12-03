import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import SpinLoader from "./components/atoms/SpinLoader";
import HomePage from "./pages/Home/Home";

function App(): ReactRouterElement {
  return (
    <Routes>
      {/* Wrapping routes with the AppLayout */}
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<SpinLoader loading />}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
