const button = document.getElementById("btn");


button.addEventListener("click", function(){

    console.log(button);

    button.innerText ="See you later!"

    window.open("https://x.com/egiberne_", "_blank")

    button.disabled = true;
    
    
}
)

const counter = document.getElementById("counter")


document.addEventListener('DOMContentLoaded', function(){ // Update the count on each page load : https://www.webdevtutor.net/blog/javascript-besucherz%C3%A4hler ; https://developer.mozilla.org/en-US/docs/Web/API/Document#events
    getAllVisits()
})



function getAllVisits(){ // Count all your visits
        
    // Get current count from localStorage
    let count = localStorage.getItem("visitCount");

    if (count === null) { //No count exists, no visitor before
        count = 1;

        console.log("Initialize to 1")

    } else {// Otherwise Increment count

        console.log("Increment to 1")

        count = Number(count) + 1;

    }
    
    // Store updated count
    localStorage.setItem("visitCount", count);

    // Display count
    document.getElementById("counter").innerText = count;
    console.log(count)



}



function getUniqueVisits(){ // Count global unique visits

    // Set a initial UUID for current user : 128-bit, 32-char, 32-Nybble : https://www.geeksforgeeks.org/javascript/how-to-create-a-guid-uuid-in-javascript/
    let uuid = crypto.randomUUID()

    console.log("initial UUID" + uuid)

    // Store UUID for current user

    localStorage.setItem("visitorUUID", uuid)
        
    const counter = document.getElementById("counter")
    // Get stored current uuid from localStorage
    let storedUUID = localStorage.getItem("visitorUUID")

    // Get current count from localStorage
    let count = localStorage.getItem("visitCount");

    if (count === null) { //No count exists, no visitor before
        count = 1;

        console.log("Initialize to 1")

    } else if(storedUUID === initialUUID){// Otherwise Increment count

        console.log("Increment to 1")

        count = Number(count) + 1;


    }
    
    // Store updated count
    localStorage.setItem("visitCount", count);

    // Store updated UUID
    uuid = crypto.randomUUID() // Get new UUID
    localStorage.setItem("visitorUUID", uuid) // Reset UUID stored

    // Display count
        document.getElementById("counter").innerText = count;
        console.log(count)
        console.log("new UUID" + uuid)

}




