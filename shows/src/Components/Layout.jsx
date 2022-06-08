import React from "react";
import Header from "./Header";

const Layout = ({ children }) =>
    <div>
        <Header/>
        <hr/>
        {children}
    </div>

export default Layout;