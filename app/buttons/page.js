"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Button";
import "./styles.css";

export default function Buttons() {
  
    function alertPrimary() {
      alert('Primary button clicked!');
    }

  return (
    <>
      <link rel="stylesheet" href="https://googleapis.com" />
      <Header />
      <div className="m-10">
        <h1>Buttons</h1>

        <br/>
        
        <Button variant="primary" onClick={() => { alertPrimary() }}>Login</Button>
        
        <br />

        <Button variant="secondary" onClick={() => { alert("Secondary button clicked") }}>Login</Button>
        
        <br />
        
        <Button variant="search" extraCssClasses="testclass">Search</Button>
        
        <br />

        <Button variant="arrow-backward"/>

        <br />

        <Button variant="arrow-forward"/>
        
      </div>
      <Footer />
    </>
  );
}