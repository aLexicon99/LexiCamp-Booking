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
        
        <Button variant="primary" buttonText="Login" onclick={() => { alertPrimary() }} extraCssClasses="testclass" />
        
        <br />

        <Button variant="secondary" buttonText="Login" onclick={() => { alert("Secondary button clicked") }} />
        
        <br />
        
        <Button variant="search" buttonText="Search" />

        
        <br />

        <Button variant="arrow-backward"/>

        <br />

        <Button variant="arrow-forward"/>
        
      </div>
      <Footer />
    </>
  );
}