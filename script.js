let timeEl = document.querySelector("#currentDay");
let saveButtonsEl = document.querySelectorAll(".saveBtn");
let container = document.querySelector(".container");
let calendarEntries = document.querySelectorAll(".description");

setInterval(function() {
  timeEl.textContent = dayjs().format("dddd, MMMM D [at] hh:mm a")

}, 1000);
colorTimeBlocks();

for (let i = 0; i < saveButtonsEl.length; i++) {
  saveButtonsEl[i].addEventListener("click", function(event) {
   event.preventDefault();
   
   
   
   console.log(this.getAttribute("data-time"));
   let entry = document.querySelectorAll(".description").value;
if (event.target.matches(".saveBtn")) {
localStorage.setItem(this.getAttribute("data-time"), this.previousElementSibling.value);
 }

});
}

calendarEntries[0].value = localStorage.getItem(9)
console.log(localStorage.getItem(9))

calendarEntries[1].value = localStorage.getItem(10)
console.log(localStorage.getItem(10))

calendarEntries[2].value = localStorage.getItem(11)
console.log(localStorage.getItem(11))

calendarEntries[3].value = localStorage.getItem(12)
console.log(localStorage.getItem(12))

calendarEntries[4].value = localStorage.getItem(13)
console.log(localStorage.getItem(13))

calendarEntries[5].value = localStorage.getItem(14)
console.log(localStorage.getItem(14))

calendarEntries[6].value = localStorage.getItem(15)
console.log(localStorage.getItem(15))

calendarEntries[7].value = localStorage.getItem(16)
console.log(localStorage.getItem(16))

calendarEntries[8].value = localStorage.getItem(9)
console.log(localStorage.getItem(16))


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


// function renderLastEntry() {
// let calendarEntry = localStorage.getItem(".description");
