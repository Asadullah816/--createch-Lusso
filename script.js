// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab
// function showTab(n) {
//   // This function will display the specified tab of the form...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   //... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == x.length - 1) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   }
//   // else {
//   //   document.getElementById("nextBtn").innerHTML = "Next";
//   // }
//   //... and run a function that will display the correct step indicator:
//   fixStepIndicator(n);
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm() && validateMotorization()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form...
//   if (currentTab >= x.length) {
//     // ... the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x,
//     y,
//     i,
//     valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].type == "checkbox" || y[i].type == "radio") {
//       if (!y[i].checked) {
//         valid = false;
//       }
//     }
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i,
//     x = document.getElementsByClassName("step");

//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class on the current step:
//   x[n].className += " active";
// }
// =============================================================
// =============================================================
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].type == "checkbox") {
      if (!y[i].checked) {
        y[i].classList.add("invalid");

        valid = false;
      } else {
        y[i].classList.remove("invalid");
      }
    } else if (y[i].type == "radio") {
      var radioGroup = document.getElementsByName(y[i].name);
      var checked = false;
      for (j = 0; j < radioGroup.length; j++) {
        if (radioGroup[j].checked) {
          checked = true;
          break;
        }
      }
      if (!checked) {
        y[i].classList.add("invalid");

        valid = false;
      } else {
        y[i].classList.remove("invalid");
      }
    }
    if (y[i].value == "") {
      y[i].className += " invalid";

      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}

// =============================================================
// =============================================================
// =============================================================

function chooseCard(button) {
  var buttons = document.querySelectorAll(".card-btn button");
  buttons.forEach((btn) => {
    btn.classList.remove("choose");
  });
  button.classList.toggle("choose");
}
function selectPrem(button) {
  if (button.innerHTML.trim() === "Selected") {
    button.innerHTML = "Select";
  } else {
    button.innerHTML = "Selected";
  }
  button.classList.toggle("fabricChoose");
}

function motobtn(btn) {
  if (btn.innerHTML.trim() == "Remove") {
    btn.innerHTML = btn.dataset.previousText;
  } else {
    btn.dataset.previousText = btn.innerHTML.trim();
    btn.innerHTML = "Remove";
  }
  btn.classList.toggle("moto-select");
}

// =====================================================
function motobtn(checkbox) {
  var label = checkbox.nextElementSibling;
  if (checkbox.checked) {
    label.innerHTML = label.dataset.previousText;
  } else {
    label.dataset.previousText = label.innerHTML.trim();
    label.innerHTML = "Remove";
  }
  label.classList.toggle("moto-select");
}
// ==============================================

var radioButtons = document.querySelectorAll(".form-checkbox");

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    document.querySelectorAll(".fc-check-inp label").forEach(function (label) {
      label.classList.remove("checked-label");
    });

    if (radioButton.checked) {
      var label = radioButton.parentElement.querySelector("label");
      label.classList.add("checked-label");
    }
  });
});
// ====================================================
var radioButtons1 = document.querySelectorAll(".form-checkbox-fabr-prem");

radioButtons1.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    document.querySelectorAll(".f-btn label").forEach(function (label) {
      label.classList.remove("checked-label");
      label.innerHTML = label.dataset.previousText;
    });

    if (radioButton.checked) {
      var label = radioButton.parentElement.querySelector("label");
      label.dataset.previousText = label.innerHTML.trim();
      label.innerHTML = "Selected";
      label.classList.add("checked-label");
    }
  });
});
// ==========================================================================

var checkboxes = document.querySelectorAll(".moto-checkbox");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var label = checkbox.parentElement.querySelector("label");
    if (checkbox.checked) {
      label.dataset.previousText = label.innerHTML;
      label.innerHTML = "Remove";
      label.classList.add("checked-label");
    } else {
      label.innerHTML = label.dataset.previousText;
      label.classList.remove("checked-label");
    }
  });
});
