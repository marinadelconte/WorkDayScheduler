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

// for (let i = 0; i < saveButtonsEl.length; i++) {
//    saveButtonsEl[i].addEventListener("click", function() {
//     event.preventDefault();
//    }
      
// if (event.target.matches(".saveBtn")) {
// localStorage.setItem("text", "this.parentElement.previousSibling.value");
//   }
// }


  

//   function renderLastEntry() {
// let calendarEntry = localStorage.getItem(".description");
