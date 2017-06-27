let inputAllFriends = document.getElementById("serchAllFriends");
let inputAddFriends = document.getElementById("serchAddFriends");
let allFriends = document.querySelectorAll(".all-friends li");
let addFriends = document.querySelectorAll(".add-friends li");

inputAllFriends.addEventListener("input", () =>{search (inputAllFriends, allFriends)});
inputAddFriends.addEventListener("input", () =>{search (inputAddFriends, addFriends)});

//поиск по друзьям
function search (input, friendColl){
    let serchStr = '';
    serchStr = input.value.toLowerCase();
    
    for(item of friendColl){
        let friend = item.querySelector("h3").innerText.toLowerCase();
        
        if(serchStr === friend.slice(0, serchStr.length)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    }
}


