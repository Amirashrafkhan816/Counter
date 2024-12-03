const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const labell = document.getElementById("labell");
let count = 0;

increasebtn.onclick = function(){
    count ++;
    labell.textContent=count;
}

decreasebtn.onclick = function(){
    count --;
    labell.textContent = count;
}

resetbtn.onclick = function(){
    count =0;
    labell.textContent = count;
}