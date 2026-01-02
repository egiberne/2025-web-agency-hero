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

const nfo= {
    md5 : "91AD12FDFC4744A6FADC8DA305DA62AB",
    ver : "0.0.5",
    cmd : "Get-FileHash .\index.js -Algorithm md5"
}


const infoToStore = JSON.stringify(nfo)

localStorage.setItem("info", infoToStore)

const infoToExtract = localStorage.getItem("info")

const infoToDisplay = JSON.parse(infoToExtract)

console.log(`Script md5 ${infoToDisplay.md5} and version ${infoToDisplay.ver}`)