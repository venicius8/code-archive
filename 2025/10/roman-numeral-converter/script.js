const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convert(number) {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= arabicNumerals[i]) {
      roman += romanNumerals[i];
      number -= arabicNumerals[i];
    }
  }

  return roman;
}

function validateNumber(number) {
  if (isNaN(number) || number === "") return "Please enter a valid number"
  if (number < 1) return "Please enter a number greater than or equal to 1"
  if (number > 3999) return "Please enter a number less than or equal to 3999"
}

function validateAndConvert(number) {
  const response = validateNumber(number);
  if (response) {
    output.textContent = response;
    return
  }

  output.textContent = convert(number);
}

convertBtn.addEventListener("click", () => {
  validateAndConvert(numberInput.value);
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateAndConvert(numberInput.value)
});

