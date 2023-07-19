/*
window.onload = () => {
    let button = document.querySelector("#btn");
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
// This function will calculate the BMI and display the result in the HTML DOM
function calculateBMI() {
    // Get the input values
    let berat_badan = document.getElementById("berat_badan").value;
    let tinggi_badan = document.getElementById("tinggi_badan").value;
    let usia = document.getElementById("usia").value;

    // Calculate the BMI
    let bmi = berat_badan / (tinggi_badan / 100) ** 2;

    // Display the result
    document.getElementById("bmi-result").innerHTML = "BMI Anda: " + bmi;

    document.getElementById("form").style.display = "none";
}
 */
// Hide the result div before the BMI button is clicked
document.getElementById("result").style.display = "none";

function calculateBMI() {
    // Get the input values
    let berat_badan = document.getElementById("berat_badan").value;
    let tinggi_badan = document.getElementById("tinggi_badan").value;
    let usia = document.getElementById("usia").value;

    // Check if the input values are valid numbers
    if (!isNaN(berat_badan) && !isNaN(tinggi_badan)) {
        // Calculate the BMI
        let bmi = berat_badan / (tinggi_badan / 100) ** 2;

        // Display the result
        document.getElementById("bmi-result").innerHTML = "<h3> BMI Anda:" + bmi ;

        // Check the BMI category
        if (bmi <= 18.5) {
            document.getElementById("bmi-category").innerHTML = "Katerogi : Underweight <br>BMI anda berada dibawah 18.5, sehingga anda dikatergorikan kedalam status <b>Kekurangan Berat Badan</b>";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            document.getElementById("bmi-category").innerHTML = "Katerogi : Healthy <br>BMI anda berada diantara 18.5 hingga 24.9, sehingga anda dikatergorikan kedalam status <b>Normal(Ideal)</b>";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            document.getElementById("bmi-category").innerHTML = "Katerogi : Overweight <br>BMI anda berada diantara 25.0 hingga 29.9, sehingga anda dikatergorikan kedalam status <b>Kelebihan Berat Badan</b>";
        } else if (bmi >= 30){
            document.getElementById("bmi-category").innerHTML = "Katerogi : Obesity <br>BMI anda berada diatas 30. sehingga anda dikatergorikan kedalam status <b>Kegemukan(Obesitas)</b>";
        }

    } else {
        document.getElementById("bmi-result").innerHTML = "Input tidak valid";
    }
    // Show the result div
    document.getElementById("result").style.display = "block";
    document.getElementById("form").style.display = "none";
}
// Event listener for the "Hitung BMI" button
document.getElementById("btn").addEventListener("click", calculateBMI);


// Event listener for the reset button
document.getElementById("reset").addEventListener("click", function () {

    // Clear the input fields
    document.getElementById("berat_badan").value = "";
    document.getElementById("tinggi_badan").value = "";
    document.getElementById("usia").value = "";

    // Hide the result div
    document.getElementById("result").style.display = "none";
});



// When the submit button is clicked, call the calculateBMI function
//document.getElementById("submit").addEventListener("click", calculateBMI);