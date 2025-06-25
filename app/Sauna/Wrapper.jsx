"use client";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { Provider } from "react-redux";
import store from "../store";

export default function SaunaWrapper({ children }) {
  return (
    <Provider store={store}>
      <header>
        <NavbarComponent />
      </header>
      <main>{children}</main>
      <footer>
        <FooterComponent />
      </footer>
    </Provider>
  );
}
