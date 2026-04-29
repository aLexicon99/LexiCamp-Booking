"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./styles.css";
export default function Buttons() {
  return (
    <>
      <link rel="stylesheet" href="https://googleapis.com" />
      <Header />
      <div className="m-10">
        <h1>Buttons</h1>
        <br/>
        <button className="transition-all active:scale-95">Login</button>
        <br />
        
        <button className="transition-all active:scale-95">
            <img src="../images/icons/search-icon.webp" className="w-5 h-5 mr-1 inline" /><b></b>Search
        </button>
        
        <br />

        <button className="arrow-button transition-all active:scale-95"><b>&gt;</b></button>
      </div>
      <Footer />
    </>
  );
}