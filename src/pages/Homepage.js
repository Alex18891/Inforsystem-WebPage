import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Homepage() {
    return (
        <>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}