let getLocation = document.querySelector("#getLocation");

getLocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(addPos, () =>{
        alert("Err!!");
    });
});

function addPos(e){
    console.log(e.coords.latitude, e.coords.longitude);
    console.log(e);
}