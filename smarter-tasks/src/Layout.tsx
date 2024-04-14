import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
 // buy adding "<Outlet />" the children components are displayed in their specified path
    return (
      <>
        <Header />
        <main> 
          <Outlet /> 
        </main>
      </>
    )
  }
  export default Layout;