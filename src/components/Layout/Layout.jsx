import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { Suspense } from "react";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div>
        <AppBar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
    </>
  );
}

export default Layout;
