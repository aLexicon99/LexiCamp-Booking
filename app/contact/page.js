"use client";
import Button from "@/components/Button";

export default function Contact() {

  function showSendMessage() {
     // document.getElementById("sendMessage").classList.remove("hidden"); 
     alert("We have recieved your message, and will get back to you as soon as possible!");
  }

  return (
    <>
      <div className="max-w-md bg-white mx-auto my-[50] px-[30] py-[30] rounded-[20] shadow-[5px_4px_20px_rgb(200,200,200)] ">
        <h1 className="text-3xl font-extrabold mb-[25] m-auto block" >Contact</h1>

        <form id="contactForm" onSubmit={ () => { showSendMessage()} }>
            <label for="nameInput" className="block">Name</label>          
            <input id="nameInput" type="text" placeholder="Your full name" required className="w-full px-5 py-3 mb-[25] border-solid border-gray bg-blue-50 rounded-lg border"/>
            
            <label for="emailInput" className="block">Email</label>
            <input id="emailInput" type="text" placeholder="Your email adress" required className="w-full px-5 py-3 mb-[25] border-solid border-gray bg-blue-50 rounded-lg border"/>

            <label for="messageTextArea" className="block">Message</label>
            <textarea id="messageTextArea" type="text" placeholder="Add your message" required rows="4" className="w-full px-5 py-3 border-solid border-gray bg-blue-50 border rounded-lg"/>

            <Button variant="primary" extraCssClasses="mt-[20] m-auto block pl-[60] pr-[60]">Send</Button>

            <div id="sendMessage" className="hidden text-white bg-green-700 px-[20] py-[10] mt-[20] rounded-lg" >
              We have recieved your message, and will get back to you as soon as possible!
            </div>
        </form>

      </div>
    </>
  );
}
