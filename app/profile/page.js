"use client";

import {useEffect} from "react";
import useAuth from "@/hooks/useAuth";
import {redirect} from "next/navigation";
import useIsClient from "@/hooks/useIsClient";
import Button from "@/components/Button"

 

export default function profile() {
  const [user, _, logout] = useAuth();

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  },[user]);
  
  
  function savePaymethodsForm()
  {

  }

 function getPaymentBlock(paymentCard)
 { 
     let imgUrl = "../images/icons/creditcard-logotyp.webp";

     if (paymentCard.publisher == "Visa") {
        imgUrl = "../images/icons/visa-logotyp.webp";
     }
     else if (paymentCard.publisher == "Mastercard") {
        imgUrl = "../images/icons/mastercard-logotyp.webp";
     }
     else if (paymentCard.publisher == "Re:member") {
        imgUrl = "../images/icons/remember-logotyp.webp";
     }

     return (
               <div key={ paymentCard.publisher } className="bg-gray-200 p-[20] rounded-lg">
                  <img src={ imgUrl } className="h-[29] float-left" />
                  <p className="clear-both pt-[10]">Card no: <b>{ paymentCard.cardNumber }</b></p>
                  <p>Publisher: <b>{ paymentCard.publisher }</b></p>
                  <p>Expiration date: <b>{ paymentCard.expDate }</b></p>
               </div>
            );
  }
  

  return (
    <div className="max-w-[780] mx-auto">
        <div className="max-w-[750] mx-[15] mt-[30] p-[30] border border-gray-50 rounded-lg shadow-[5px_4px_20px_rgb(170,170,170)]">
        
            <h2 className="text-xl mb-[20] text-green-700"><b>Personal information</b></h2>

            <form id="userForm" onSubmit={ () => { showSendMessage()} }>
                <div className="mb-[25] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstNameInput">First name</label>
                        <input id="firstNameInput" type="text" placeholder="Your first name" defaultValue={user.firstName} required
                          className="w-full px-5 py-3 border-solid border-gray-500 bg-blue-50 rounded-lg border"/>
                    </div>
                
                    <div>      
                        <label htmlFor="lastNameInput">Last name</label>
                        <input id="lastNameInput" type="text" placeholder="Your last name" defaultValue={user.lastName} required 
                            className="w-full px-5 py-3 border-solid border-gray-500 rows=3 bg-blue-50 rounded-lg border"/>
                    </div>
                </div>

                <div className="mb-[25]">      
                    <label htmlFor="locationInput">Location</label>
                    <input id="locationInput" type="text" placeholder="Your location" defaultValue={user.location} required 
                        className="block w-[276] sm:w-[336] px-5 py-3 border-solid border-gray-500 rows=3 bg-blue-50 rounded-lg border"/>
                </div>

                <div className="mb-[60]">      
                    <label htmlFor="bioTextArea">Bio</label>
                    <textarea id="bioTextArea" type="text" placeholder="About you" rows="3" defaultValue={user.bio} required 
                        className="w-full px-5 py-3 border-solid border-gray-500 bg-blue-50 rounded-lg border"/>
                </div>
                <Button variant="primary" extraCssClasses="mt-[10] mb-[20] block pl-[60] pr-[60] float-right relative top-[-50]">Save</Button>
            </form>
          </div>


          <div className="max-w-[750] mx-[15] mt-[30] p-[30] border border-gray-50 rounded-lg shadow-[5px_4px_20px_rgb(170,170,170)]">
        
            <h2 className="text-xl mb-[20] text-green-700"><b>Account Security</b></h2>

            <form id="securityForm" onSubmit={ () => { saveSecurityForm()} }>
                <div className="mb-[25] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstNameInput">Username</label>
                        <input id="userNameInput" type="text" placeholder="Your username" defaultValue={user.username}
                            className="w-full px-5 py-3 border-solid border-gray-500 bg-blue-50 rounded-lg border"/>
                    </div>
                
                    <div>
                        <label htmlFor="emailInput">Email</label>
                        <input id="emailInput" type="email" placeholder="Your email adress" defaultValue={user.email} required 
                            className="w-full px-5 py-3 border-solid border-gray-500 rows=3 bg-blue-50 rounded-lg border"/>
                    </div>
                </div>

                <div className="max-w-[610] mb-[80]">
                    <label htmlFor="passwordInput" className="block">Password</label>
                    <input id="passwordInput" type="password" placeholder="Your password" defaultValue={user.password} required 
                        className="max-w-[610] sm:max-w-[336] w-full px-5 py-3 border-solid border-gray-500 rows=3 bg-blue-50 rounded-lg border"/> 
                </div>

                <Button variant="primary" extraCssClasses="mt-[10] block pl-[60] pr-[60] float-right relative top-[-60]">Save</Button>
            </form>
          </div>


          <div className="max-w-[750] mx-[15] mt-[30] p-[30] border border-gray-50 rounded-lg shadow-[5px_4px_20px_rgb(170,170,170)]">
          
              <div className="w-full mb-[25] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h2 className="text-xl mb-[20] text-green-700 float-left"><b>Payment methods</b></h2>
                  <p className="float-right text-blue-700 text-right cursor-pointer" onClick={ () => alert("Här ska det visas ett formulär där man kan skapa ett nytt betalsätt") }>
                      <span className="material-symbols-outlined top-1 relative mr-1">add_circle</span><b>Add a new card</b>
                  </p>
              </div>

              <form id="paymethodsForm" onSubmit={ () => { savePaymethodsForm()} }>
                  <div className="mb-[80] grid grid-cols-1 md:grid-cols-2 gap-4">
                      { 
                        user.paymentCards.map(paymentCard => getPaymentBlock(paymentCard))
                      }
                  </div>
              
                  <Button variant="primary" extraCssClasses="mt-[10] block pl-[60] pr-[60] float-right relative top-[-60]">Save</Button>
              </form>
          </div>

      </div>
  );
}
