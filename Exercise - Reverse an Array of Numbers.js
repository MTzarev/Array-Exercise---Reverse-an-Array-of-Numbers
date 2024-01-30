function reverseAnArrayOfNumbers(num, array) {
    array.push(num);
    let newArray = "";
    for (let i = array.pop() - 1; i >= 0; i--) {
        newArray += Number(array[i]) + " "
    }

    console.log(newArray);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
