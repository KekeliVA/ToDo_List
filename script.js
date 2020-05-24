// grab my html elements
var saveEl = document.querySelector(".btn");
var inputEl = document.querySelector(".input");
var nineAMList = document.getElementById("nine-am-list");
var tag = document.createElement("div");
var containerEl = document.querySelector("container");
var btn10El = document.getElementById("btn10");
var ten_am_input = document.getElementById("ten-am-input");
var tenAMList = document.getElementById("ten-am-list");
var eleven_am_input = document.getElementById("eleven-am-input");
var elevenAMList = document.getElementById("eleven-am-list");
var twelve_pm_input  = document.getElementById("twelve-pm-input")
var twelvePMList = document.getElementById("twelve-pm-list");
var one_pm_input = document.getElementById("one-pm-input");
var onePMList = document.getElementById("one-pm-list");
var two_pm_input = document.getElementById("two-pm-input");
var twoPMList = document.getElementById("two-pm-list");
var three_pm_input = document.getElementById("three-pm-input");
var threePMList = document.getElementById("three-pm-list");
var four_pm_input = document.getElementById("four-pm-input");
var fourPMList = document.getElementById("four-pm-list");
var five_pm_input = document.getElementById("four-pm-input");
var fivePMList = document.getElementById("five-pm-list");

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

var listItem = localStorage.getItem("list", "10:00");
tag.textContent = listItem;
nineAMList.appendChild(tag);
console.log(listItem);
// make sure keys match
// do something with item once it's been acquired from local storage

btn10El.addEventListener("click", function() {
  localStorage.setItem("10:00", ten_am_input.value);
  tag.textContent = ten_am_input.value;
  tenAMList.appendChild(tag)
  if (ten_am_input.value == "") {
    alert("Type something into the input field");
  }
});

btn11.addEventListener("click", function() {
  localStorage.setItem("11:00", eleven_am_input.value);
  tag.textContent = eleven_am_input.value;
  elevenAMList.appendChild(tag)
  if (eleven_am_input.value == "") {
    alert("Type something into the input field");
  }
});


btn12.addEventListener("click", function() {
  localStorage.setItem("12:00", twelve_pm_input.value);
  tag.textContent = twelve_pm_input.value;
  twelvePMList.appendChild(tag)
  if (twelve_pm_input.value == "") {
    alert("Type something into the input field");
  }
});


btn1.addEventListener("click", function() {
  localStorage.setItem("1:00", one_pm_input.value);
  tag.textContent = one_pm_input.value;
  onePMList.appendChild(tag)
  if (one_pm_input.value == "") {
    alert("Type something into the input field");
  }
});


btn2.addEventListener("click", function() {
  localStorage.setItem("2:00", two_pm_input.value);
  tag.textContent = two_pm_input.value;
  twoPMList.appendChild(tag)
  if (two_pm_input.value == "") {
    alert("Type something into the input field");
  }
});


btn3.addEventListener("click", function() {
  localStorage.setItem("3:00", three_pm_input.value);
  tag.textContent = three_pm_input.value;
  threePMList.appendChild(tag)
  if (three_pm_input.value == "") {
    alert("Type something into the input field");
  }
});


btn4.addEventListener("click", function() {
  localStorage.setItem("4:00", four_pm_input.value);
  tag.textContent = four_pm_input.value;
  fourPMList.appendChild(tag)
  if (four_pm_input.value == "") {
    alert("Type something into the input field");
  }
});


btn5.addEventListener("click", function() {
  localStorage.setItem("5:00", five_pm_input.value);
  tag.textContent = five_pm_input.value;
  fivePMList.appendChild(tag)
  if (five_pm_input.value == "") {
    alert("Type something into the input field");
  }
});



/*
var tenListItem = localStorage.getItem("10:00");
tag.textContent = tenListItem;
tenAMList.appendChild(tag);
console.log(tenListItem);
*/