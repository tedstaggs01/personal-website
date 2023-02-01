const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const completionText = document.getElementById("completionText");

checkbox1.addEventListener("change", function() {
  if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
    completionText.style.display = "block";
  } else {
    completionText.style.display = "none";
  }
});

checkbox2.addEventListener("change", function() {
  if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
    completionText.style.display = "block";
  } else {
    completionText.style.display = "none";
  }
});

checkbox3.addEventListener("change", function() {
  if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
    completionText.style.display = "block";
  } else {
    completionText.style.display = "none";
  }
});
