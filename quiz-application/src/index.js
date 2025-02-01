import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";

ReactDom.ender(
    <AuthProvider>
        <App/>
    </AuthProvider>,
    document.getElementById("root")
);