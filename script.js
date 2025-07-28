const adding = document.getElementById("adding")
const list = document.getElementById("list")

function addTask() {
    if (adding.value === "") {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = adding.value;
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    adding.value = "";
    savedata();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata() {
    localStorage.setItem("data", list.innerHTML)
}

function showTask(){
    list.innerHTML=localStorage.getItem("data")
}
showTask()