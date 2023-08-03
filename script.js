// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// parseInt(document.querySelectorAll(".row")[0].dataset.time) < dayjs().hour()
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//change color of the time block- grey-past, red-current, green future
//have a button to save entries for each time block
//save entries into local storage and have them display on the page upon refresh

let timeEl = document.querySelector("#currentDay");
let saveButtonsEl = document.querySelectorAll(".saveBtn");
let container = document.querySelector(".container");
let calendarEntries = document.querySelectorAll(".description");

setInterval(function() {
  timeEl.textContent = dayjs().format("dddd, MMMM D [at] hh:mm a")

}, 1000);

function colorTimeBlocks(){
  for (let i = 0; i < calendarEntries.length; i++) {
    if (parseInt(calendarEntries[i].dataset.time) < dayjs().format("H")) {
      calendarEntries[i].style.backgroundColor = "grey";
    }

    if (parseInt(calendarEntries[i].dataset.time) === parseInt(dayjs().format("H"))) {
      calendarEntries[i].style.backgroundColor = "red";    
    }

    if (parseInt(calendarEntries[i].dataset.time) > dayjs().format("H")) {
      calendarEntries[i].style.backgroundColor = "green";    
    }
  }
}
colorTimeBlocks();


for (let i = 0; i < saveButtonsEl.length; i++) {
  console.log(saveButtonsEl[i]);
  saveButtonsEl[i].addEventListener("click", function() {
    if (event.target.matches("saveButtonsEl")) {
    console.log(event.target.previousSibling.value)
  })
}

// container.addEventListener("click", function (event) {
// event.preventDefault();
//   if (event.target.matches("saveButtonsEl")) {
  
//       console.log(event.target.previousSibling.value)

//     localStorage.setItem("textarea")
    
//   }

  // function renderLastEntry() {
// let calendarEntry = localStorage.getItem(".description");
// }
