
"use client";
import Button from "./Button";
import { useEffect, useState } from "react";


export default function FilterBar({ children, onPriceChange, onRatingChange, onAmenitiesChange, onLocationsChange, onActivitiesChange }) {

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

        document.getElementById("amenitiesPopup").classList.remove("hidden");

        let amenitiesList = document.getElementById("amenitiesList");
        amenitiesList.innerHTML = "";

        for (let i = 0; i < amenities.length; i++) {          
            amenitiesList.insertAdjacentHTML("beforeend", `<li style="list-style-type: none">
                                                            <input type="checkbox" id="amenity-${i}" name="${amenities[i]}" class="amenities-checkbox" /> 
                                                            <label for="amenity-${i}"> ${amenities[i]}</label>
                                                            </li>`);
        }
    }    

    function openLocationsPopup() {
        var locations = [];

        for (let i = 0; i < Locations.length; i++) {            
        locations.push(Locations[i].name);
        }

        let locationsPopup = document.getElementById("locationsPopup");
        locationsPopup.classList.remove("hidden");
        locationsPopup.classList.replace("w-2xs", "w-xs");

        let locationsList = document.getElementById("locationsList");
        locationsList.innerHTML = "";

        for (let i = 0; i < locations.length; i++) {          
            locationsList.insertAdjacentHTML("beforeend", `<li style="list-style-type: none">
                                                            <input type="checkbox" id="location-${i}" name="${locations[i]}" class="locations-checkbox" /> 
                                                            <label for="location-${i}"> ${locations[i]}</label>
                                                            </li>`);
        }
    }    

    function openActivitiesPopup() {
        var activities = [];

        for (let i = 0; i < Locations.length; i++) {
            for(let j = 0; j < Locations[i].activities.length; j++){            
                if( !activities.includes(Locations[i].activities[j]) ) {
                    activities.push(Locations[i].activities[j]);
                }
            }
        }

        document.getElementById("activitiesPopup").classList.remove("hidden");     

        let activitiesList = document.getElementById("activitiesList");
        activitiesList.innerHTML = "";

        for (let i = 0; i < activities.length; i++) {          
            activitiesList.insertAdjacentHTML("beforeend", `<li style="list-style-type: none">
                                                            <input type="checkbox" id="activity-${i}" name="${activities[i]}" class="activities-checkbox" /> 
                                                            <label for="activity-${i}"> ${activities[i]}</label>
                                                            </li>`);
        }
    }    

    function closePopup(filter) {
        let selectedFilter = [];

        let checkboxes = document.querySelectorAll("input[type='checkbox']." + filter + "-checkbox");

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedFilter.push(checkbox.name);
            }
        });


        if (filter == "amenities") {
            onAmenitiesChange(selectedFilter);
        }
        else if (filter == "locations") {
            onLocationsChange(selectedFilter);
        }
        else if (filter == "activities") {
            onActivitiesChange(selectedFilter);
        }

        document.getElementById(filter + "Popup").classList.add("hidden");
    }

    function showAllFilters() {
        document.getElementById("locationButton").classList.toggle("hidden");
        document.getElementById("activityButton").classList.toggle("hidden");
    }

    return (
        <div className="max-w-2xl">
            <div id="amenitiesPopup" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2xs bg-white 
                pl-10 pr-10 pt-4 pb-6 rounded-md shadow-lg z-50">
                <h2 id="headerText" className="text-xl font-bold -mb-2">Amenities</h2>
                
                <ul id="amenitiesList" className="space-y-2 pl-12 inline"></ul>

                <Button id="amenitiesButton" variant="primary" extraCssClasses="mt-4 px-4 py-2 text-white rounded-md" onClick={() => closePopup("amenities")}>
                    Save and close
                </Button>               
            </div>

            <div id="locationsPopup" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-xs sm:w-sm bg-white 
                pl-10 pr-10 pt-4 pb-6 rounded-md shadow-lg z-50">
                <h2 id="headerText" className="text-xl font-bold -mb-2">Locations</h2>
                
                <ul id="locationsList" className="space-y-2 pl-12 inline"></ul>
                
                <Button id="locationsButton" variant="primary" extraCssClasses="mt-4 px-4 py-2 text-white rounded-md" onClick={() => closePopup("locations")}>
                    Save and close
                </Button>

            </div>

            <div id="activitiesPopup" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2xs bg-white 
                pl-10 pr-10 pt-4 pb-6 rounded-md shadow-lg z-50">
                <h2 id="headerText" className="text-xl font-bold -mb-2">Activities</h2>
                
                <ul id="activitiesList" className="space-y-2 pl-12 inline"></ul>
                
                <Button id="activitiesButton" variant="primary" extraCssClasses="mt-4 px-4 py-2 text-white rounded-md" onClick={() => closePopup("activities")}>
                    Save and close
                </Button>
            </div>
            
            <div>
                <select className="w-[120]	px-4 py-3 mr-4 mt-5 rounded-md border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none inline" 
                    defaultValue="Price" onChange={(e) => { onPriceChange(e.target.value) }}>   
                    <option style={{ display: "none" }} value="Price">Price</option>       
                    <option value="ascending">Ascending price</option>
                    <option value="descending">Descending price</option>
                </select>

                <select className="w-[120] px-4 py-3 mr-4 mt-5 rounded-md border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none inline" 
                    defaultValue="Rating" onChange={(e) => { onRatingChange(e.target.value) }}>                
                    <option style={{ display: "none" }} value="Rating">Rating</option>
                    <option value="1-10">1 to 10</option>
                    <option value="3-10">3 to 10</option>
                    <option value="5-10">5 to 10</option>  
                    <option value="7-10">7 to 10</option>   
                    <option value="9-10">9 to 10</option>   
                </select>
                
                <Button variant="outlined" extraCssClasses="inline mr-4 mt-5 rounded-md" onClick={() => openAmenitiesPopup()}>
                    Amenities
                </Button>

                <Button variant="primary" extraCssClasses="pt-[5] pb-[5] mr-4 mt-5 inline" onClick={() => { showAllFilters() }}>          
                    <span className="material-symbols-outlined relative mr-4 top-1">tune</span>
                    <span className="-top-0.5 relative">All Filters</span>
                </Button>

                <Button id="locationButton" variant="outlined" extraCssClasses="hidden mr-4 mt-5 rounded-md" onClick={() => openLocationsPopup()}>
                    Location
                </Button>
        
                <Button id="activityButton" variant="outlined" extraCssClasses="hidden mr-3 mt-5 rounded-md" onClick={() => openActivitiesPopup()}>
                    Activities
                </Button>
            </div>
            
        </div>
    );
}

