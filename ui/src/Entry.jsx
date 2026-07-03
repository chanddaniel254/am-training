import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home/HomePage";

const Entry = () => {
  const isAuthenticated = localStorage.getItem("room1");
  return (
    <div>
      {isAuthenticated ? (
        <HomePage />
      ) : (
        <LoginPage
          onSuccess={(value) => {
            localStorage.setItem("room1", value);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};

export default Entry;
