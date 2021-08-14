var items = document.querySelectorAll(".item");
var dellist = document.querySelectorAll(".delete");
var itemlen = items.length;
setInterval(function x() {
    items = document.querySelectorAll(".item");
    dellist = document.querySelectorAll(".delete");
    itemlen = items.length;
    // keep refreshing the values to keep adding new elements etc
}, 1000)

document.getElementById("tick").addEventListener("click", (a) => {
    let inputactivity = userinput.value; //take input from user
    var ul = document.querySelector("#list");

    if (inputactivity != "") {
        
        userinput.value = ""; //reset to empty
        // delete button
        let btn = document.createElement("button");
        btn.className = "delete";
        btn.appendChild(document.createTextNode("🗑"));

        //create li element
        let li = document.createElement("li"); //create li
        let span = li.appendChild(document.createElement("span")); //create span inside li
        li.className = "item";
        span.className = "ItemText"

        li.appendChild(btn);
        span.appendChild(document.createTextNode(inputactivity));// provide text to span
        ul.appendChild(li);
    }
})

// delete item
// fotunately no of elements and del buttons is SVGMaskElement. so this worked 
setInterval(function del() {

    for (let i = 0; i < itemlen; i++) {
        dellist[i].addEventListener("click", (a) => {
            items[i].remove();
            // console.log("deleted")
        })
    }
}, 1000)


