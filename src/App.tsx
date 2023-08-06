import { GlobalStyles } from "../GlobalStyles.ts";
import Router from "./router/indesx.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster } from "react-hot-toast";

export default function App() {

  return (
    <>
      <Toaster position="top-right" />
      <GlobalStyles />
      <Router />
    </>
  )
}
