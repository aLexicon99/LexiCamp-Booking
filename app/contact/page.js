"use client";
import Button from "@/components/Button";

export default function Contact() {

  const showSendMessage = (event) => {
    event.preventDefault();
    document.getElementById("sendMessage").classList.remove("hidden");
    document.getElementById("sendButton").classList.add("hidden");
  }

  return (
    <div className="max-w-[505] mx-auto">
      <div className="max-w-[475] bg-white mx-[15] my-[75] px-[30] py-[30] rounded-[20] shadow-[5px_4px_20px_rgb(200,200,200)] ">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2 text-center">Contact</h1>
        <p className="mb-[25] mt-4 text-on-surface-variant font-medium">Here you can send a message to the team at LexiCamp.</p>

        <form id="contactForm" onSubmit={ showSendMessage } >
          <div className="space-y-4">
            <label htmlFor="nameInput" className="block text-sm font-bold text-on-surface-variant px-1">Name</label>          
            <input id="nameInput" type="text" placeholder="Your full name" required className="w-full pl-4 pr-4 py-4 bg-surface rounded-lg border border-stone-200 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface placeholder:text-outline-variant font-medium"/>
            
            <div className="space-y-2">
              <label htmlFor="emailInput" className="block text-sm font-bold text-on-surface-variant px-1">Email</label>
              <input id="emailInput" type="email" placeholder="Your email adress" required className="w-full pl-4 pr-4 py-4 bg-surface rounded-lg border border-stone-200 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface placeholder:text-outline-variant font-medium"/>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="messageTextArea" className="block text-sm font-bold text-on-surface-variant px-1">Message</label>
              <textarea id="messageTextArea" type="text" placeholder="Add your message" required rows="4" className="w-full pl-4 pr-4 py-4 bg-surface rounded-lg border border-stone-200 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface placeholder:text-outline-variant font-medium"/>
            </div>
            <div id="sendButton">
              <Button onClick={(e)=> showSendMessage(e)} variant="primary" extraCssClasses="w-full py-4 bg-primary-container text-on-primary-container rounded-lg font-bold text-lg shadow-lg hover:shadow-primary-container/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200">Send</Button>
            </div>
          </div>
          <div id="sendMessage" className="hidden text-white bg-green-700 px-[20] py-[10] mt-[20] rounded-lg" >
              We have received your message, and will get back to you as soon as possible!
          </div>
        </form>

      </div>
    </div>
  );
}
