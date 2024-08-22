function checkage() {
    let age = document.getElementById("userInput").value;
    age = parseFloat(age);
    let result;

    if (age >= 18) {
        result = "you are eligible for vote";
    } else if (age < 18) {
        result = "you are not eligible for vote";
    } else {
        result = "Invalid Input";
    }

    document.getElementById("result").innerText = result;
}

const slicedOutput = arr.slice(1,5);
console.log(slicedOutput);
console.log(arr);
                                                                                                                                                                                                           