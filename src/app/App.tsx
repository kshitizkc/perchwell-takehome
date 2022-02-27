import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppFooter, AppHeader } from "./index";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <div className="min-h-screen flex flex-col">
          <AppRoutes />
        </div>
        <AppFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
