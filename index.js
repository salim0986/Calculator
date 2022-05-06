const dataOperands = document.querySelectorAll(".key--operator");
const calc_display = document.querySelector(".calculator__display");
let spanDisplay = document.querySelector(".number-val");
let extraDisplay = document.querySelector('.norm')
const btn = document.querySelectorAll("button");
let firstVal = '';
let secondVal = '';
let strSecond = '';
btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const button = e.target;
        const action = button.dataset.action;
        if (!action) {
            const keyValue = button.textContent;
            if (spanDisplay.textContent == 0) {
                spanDisplay.textContent = "";
                spanDisplay.append(keyValue)
            } else {
                spanDisplay.append(keyValue)
            }

        } else {
            if (action === "clear") {
                spanDisplay.textContent = 0
            } else if (action === "decimal") {
                const dec = e.target.textContent
                spanDisplay.append(dec)
            } else {

                let calc_display_val = spanDisplay.textContent;

                if (calc_display_val.includes('+') || calc_display_val.includes("-") || calc_display_val.includes("×") || calc_display_val.includes("÷")) {
                    strSecond = spanDisplay.textContent;
                    secondVal = Number(strSecond.substring(1, spanDisplay.textContent.length));
                    extraDisplay.style.display = "none"

                } else {
                    firstVal = Number(spanDisplay.textContent);
                    extraDisplay.style.display = "inline";
                    extraDisplay.textContent = spanDisplay.textContent;
                    spanDisplay.textContent = ""
                    spanDisplay.append(button.textContent)

                }
                if (action === "calculate") {
                    console.log(firstVal);
                    console.log(secondVal);
                    if (strSecond.includes("+")) {
                        spanDisplay.textContent = firstVal + secondVal;
                    } else if (strSecond.includes("-")) {
                        spanDisplay.textContent = firstVal - secondVal;
                    } else if (strSecond.includes("×")) {
                        spanDisplay.textContent = firstVal * secondVal;
                    } else if (strSecond.includes("÷")) {
                        spanDisplay.textContent = firstVal / secondVal;
                    }

                }

            }
        }
    })
})