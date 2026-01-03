const button = document.getElementById("btn");


button.addEventListener("click", function(){

    console.log(button);

    button.innerText ="See you later!"

    window.open("https://x.com/egiberne_", "_blank")

    button.disabled = true;
    
    
})

const counter = document.getElementById("counter")


document.addEventListener('DOMContentLoaded', function(){ // Update the count on each page load : https://www.webdevtutor.net/blog/javascript-besucherz%C3%A4hler ; https://developer.mozilla.org/en-US/docs/Web/API/Document#events
    countAllVisits()
})


function countAllVisits(){ // Count all your visits
        
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

    return count

}

// Object

const infoApp= {
    name : "web agency hero",
    version : "0.0.5",
    files : ["index.js","index.html","style.css,faded-office.png"]
}


const infoToStore = JSON.stringify(infoApp)

localStorage.setItem("info", infoToStore)

const infoToExtract = localStorage.getItem("info")

const infoToDisplay = JSON.parse(infoToExtract)

    console.log(`AppName ${infoToDisplay.name}, version ${infoToDisplay.version} and files ${infoToDisplay.files[0]}`)