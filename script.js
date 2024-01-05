const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write a nonempty task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';

}

listContainer.addEventListener("click", function(e){
        if (e.target.tagName === "LI") { //if list item clicked
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") { //if x icon clicked
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function clearList(){
    localStorage.clear();
    location.reload();
}

showTask();