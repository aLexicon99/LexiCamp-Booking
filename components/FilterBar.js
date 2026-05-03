
"use client";
// import "https://fonts.googleapis.com";
import Button from "./Button";

export default function FilterBar({ children }) {

    return (
        <>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
            
            <div>
                
                <select className="px-4 py-3 mr-4 rounded-md border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none inline" 
                    onChange={(e) => { console.log(e.target.value) }}>           
                    <option value="Price">Price</option>
                    <option value="location">Location</option>
                    <option value="date">Date</option>
                </select>

                <select className="px-4 py-3 mr-4 rounded-md border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none inline" 
                    defaultValue="Rating" onChange={(e) => { console.log(e.target.value) }}>                
                    <option style={{ display: "none" }} value="Rating">Rating</option>
                    <option value="1-5">1 to 5</option>
                    <option value="2-5">2 to 5</option>
                    <option value="3-5">3 to 5</option>  
                    <option value="4-5">4 to 5</option>   
                </select>


                <select className="px-4 py-3 mr-4 rounded-md border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none inline" 
                    defaultValue="Amenities" onChange={(e) => { console.log(e.target.value) }}>
                    <option style={{ display: "none" }} value="Amenities">Amenities</option>
                    <option value="shower">Shower facility</option>
                    <option value="2-5"></option>
                    <option value="3-5">3 till 5</option>  
                    <option value="4-5">4 till 5</option>  
                </select>

                <Button variant="primary" extraCssClasses="py-1 inline">                    
                    <span className="material-symbols-outlined top-1 relative mr-4">tune</span>
                    <span className="-top-0.5 relative">All Filters</span>
                </Button>
                <Button variant="primary">Göran</Button>
            </div>
            
        </>
    );
    //<img src="../images/icons/filter-icon-white.webp" className="w-5 h-5 mr-2 inline" />
    // <span style={{ fontFamily: "Material Symbols Outlined", fontSize: "24px"}}>tune</span>
}

