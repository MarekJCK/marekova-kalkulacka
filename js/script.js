$(document).ready(function() {

  // Variables

  var screen = $("#screen");
  var equals = $("#equals");
  var nums = $(".num");
  var operation = $(".operation");
  var currentNumber = "";
  var oldNumber = "";
  var result;
  var operator;

  // Display what the user clicks

  nums.click(function() {
    if (result) {
      currentNumber = $(this).attr("data-num");
      result = "";
    } else {
      currentNumber = currentNumber + $(this).attr(
        "data-num");
    }
    $("#screen").text(currentNumber);
  });

  // If the user clicks on an operation button, keep the old value in another variable and save the operation

  operation.click(function() {
    oldNumber = currentNumber;
    currentNumber = "";
    operator = $(this).attr("data-ops");
    $("#equals").attr("data-result", "");
  });

  // Display the result of the operation

  $("#equals").click(function() {
    currentNumber = parseFloat(currentNumber);
    oldNumber = parseFloat(oldNumber);
    if (operator === "plus") {
      result = oldNumber + currentNumber;
    } else if (operator === "minus") {
      result = oldNumber - currentNumber;
    } else if (operator === "times") {
      result = oldNumber * currentNumber;
    } else if (operator === "divided by") {
      result = oldNumber / currentNumber;
    }
    $("#screen").text(result);
    equals.attr("data-result", result);
    oldNumber = 0;
    currentNumber = result;
  });

  // Clear the display

  $("#clear").click(function() {
    oldNumber = "";
    currentNumber = "";
    equals.attr("data-result", result);
    $("#screen").text("0");
  });
});
