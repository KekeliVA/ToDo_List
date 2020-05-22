// grab my html elements
var saveEl = document.querySelector(".btn");
var inputEl = document.querySelector(".input");
var nineAMList = document.getElementById("nine-am-list");
var tag = document.createElement("div");

/*
const m = moment();
console.log(m.format("dddd"));
*/

// on click of the button, save the content in the corresponding text box
// append to list

saveEl.addEventListener("click", function() {
  localStorage.setItem("list", inputEl.value);
  tag.textContent = inputEl.value;
  nineAMList.appendChild(tag);
  if (inputEl.value == "") {
    alert("Type something in the input field");
  }
});

var listItem = localStorage.getItem("list");
tag.textContent = listItem;
nineAMList.appendChild(tag);
console.log(listItem);
// make sure keys match
// do something with item once it's been acquired from local storage