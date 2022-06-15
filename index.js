
let add = document.querySelector("#add");
let del = document.querySelector("#delete");
const arr = [];

add.addEventListener("click", () => {
const input = document.querySelector("input").value;
document.querySelector("input").value = "";
if(input != "") {
arr.push(input);
render();
}
})

del.addEventListener("click", () => {
arr.shift();
render();
})
function render() {
let str = "";
for(let i = 0; i < arr.length; ++i) {
 	str += `<li>${arr[i]}</li>`
}
document.querySelector("#list").innerHTML = str;
}


