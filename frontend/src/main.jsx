import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "./components/Context/globalcontext.jsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <Provider>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
