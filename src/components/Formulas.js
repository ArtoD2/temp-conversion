Alg = () => {
    let inp = document.getElementById("input1")
    let inp2 = document.getElementById("input2")
    var number = document.getElementById("calculate")
        if (inp == "C") {
            if (inp2 == "F") {
                solution = ((number * (9/5)) + 32)
                number += solution
            }
            if (inp2 == "K") {
                solution = (number + 273.15)
                number += solution
            }
        return number
        }
        if (inp == "F") {
            if (inp2 == "C") {
                solution = ((number - 32) * (5/9))
                number += solution
            }
            if (inp2 == "K") {
                solution = ((number - 32) * (5/9) + 273.15)
                number += solution
            }
        return number
        }
        if (inp == "K") {
            if (inp2 == "F") {
                solution = (((number - 273.15) * (9/5)) + 32)
                number += solution
            }
            if (inp2 == "C") {
                solution = (number - 273.15)
                number += solution
            }
        return number
        }
}