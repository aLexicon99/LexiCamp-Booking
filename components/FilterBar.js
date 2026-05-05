
"use client";
import Button from "./Button";
import { useEffect, useState } from "react";
// import locations from "@/public/locations_data.json";
import CampgroundCard from "@/components/CampgroundCard";


export default function FilterBar({ children }) {

     const [Locations, setLocations] = useState([]);
    
      useEffect(() => {
        async function fetchLocations() {
          const response = await fetch("/api/locations", { cache: "no-cache" });
          const data = await response.json();
          setLocations(data);
        }
        fetchLocations();
      }, []);

      function openAmenitiesPopup() {
          var amenities = [];
    
          for (let i = 0; i < Locations.length; i++) {
              for(let j = 0; j < Locations[i].amenities.length; j++){            
                  if( !amenities.includes(Locations[i].amenities[j]) ) {
                      amenities.push(Locations[i].amenities[j]);
                  }
              }
          }
    
          let popup = document.getElementById("amenitiesPopup");
            
          popup.classList.remove("hidden");

          let amenitiesList = document.getElementById("amenitiesList");
          amenitiesList.innerHTML = "";

          for (let i = 0; i < amenities.length; i++) {          
              amenitiesList.insertAdjacentHTML("beforeend", `<li style="list-style-type: none">
                                                                <input type="checkbox" id="amenity-${i}" /> 
                                                                <label for="amenity-${i}"> ${amenities[i]}</label>
                                                              </li>`);
          }

      }    


      function closeAmenitiesPopup() {
        let selectedAmenities = [];
        let checkboxes = document.querySelectorAll("#amenitiesList input[type='checkbox']");
       
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedAmenities.push(checkbox.nextSibling.textContent.trim());
            }
        });

        let popup = document.getElementById("amenitiesPopup").classList.add("hidden");
      }
      
       
      return (
        <>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

            <div id="amenitiesPopup" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2xs bg-white 
                 bg-gray-100 pl-10 pr-10 pt-4 pb-6 rounded-md shadow-lg z-50">
                <h2 className="text-xl font-bold -mb-2">Amenities</h2>
                
                <ul id="amenitiesList" className="space-y-2 pl-12 inline"></ul>

                <Button variant="primary" extraCssClasses="mt-4 px-4 py-2 text-white rounded-md" onClick={() => closeAmenitiesPopup()}>
                    Save and close
                </Button>
            </div>

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


                <Button variant="outlined" extraCssClasses="inline mr-3 rounded-md" onClick={() => openAmenitiesPopup()}>
                    Amenities
                </Button>

                <Button variant="primary" extraCssClasses="py-1 inline">                    
                    <span className="material-symbols-outlined top-1 relative mr-4">tune</span>
                    <span className="-top-0.5 relative">All Filters</span>
                </Button>
            </div>
            
        </>
    );
    //<img src="../images/icons/filter-icon-white.webp" className="w-5 h-5 mr-2 inline" />
    // <span style={{ fontFamily: "Material Symbols Outlined", fontSize: "24px"}}>tune</span>
}

