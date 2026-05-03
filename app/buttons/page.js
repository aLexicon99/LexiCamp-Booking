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
        
        <Button variant="primary" extraCssClasses="mr-3" onClick={() => { alertPrimary() }}>Login</Button>                  

        <Button variant="secondary" extraCssClasses="mr-3" onClick={() => { alert("Secondary button clicked") }}>Login</Button>
     
        <Button variant="search" extraCssClasses="testclass mr-3">Search</Button>
     
        <Button variant="arrow-backward" extraCssClasses="mr-3"/>

        <Button variant="arrow-forward"  extraCssClasses="mr-3"/>
        
      </div>
      <Footer />
    </>
  );
}