let save = document.querySelector("#save");
let load = document.querySelector("#load");

save.addEventListener("click", (e) => {
    e.preventDefault();
    
    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let text = document.querySelector("#text").value;
    
    localStorage.someData = JSON.stringify({
        name: name,
        lastName: lastName,
        text: text
    });

});

load.addEventListener("click", e => {
    e.preventDefault();
    let data = JSON.parse(localStorage.someData);
    //console.log(data);
    
    document.querySelector("#name").value = data.name;
    document.querySelector("#lastName").value = data.lastName;
    document.querySelector("#text").value = data.text;
})