// Time display footer
const weekday = ["Sunday!", "Monday!", "Tuesday!", "Wednesday!", "Thursday!", "Friday!", "Saturday!"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("displaydate").innerHTML = day;


// toggle function on js 
function showSection(sectionId) {
  var section1 = document.getElementById("section1");
  var section2 = document.getElementById("section2");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");

  if (sectionId === "section1") {
    section1.style.display = "block";
    section2.style.display = "none";
    button1.disabled = true;
    button2.disabled = false;
  } else if (sectionId === "section2") {
    section1.style.display = "none";
    section2.style.display = "block";
    button1.disabled = false;
    button2.disabled = true;
  }
}
