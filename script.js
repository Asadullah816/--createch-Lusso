
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
