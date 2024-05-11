document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();

    var ageYear = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        ageYear--;
    }

    var ageMonth = today.getMonth() - dob.getMonth();
    if (ageMonth < 0) {
        ageMonth = 12 + ageMonth;
    }

    var ageDay = today.getDate() - dob.getDate();
    if (ageDay < 0) {
        var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDay = lastDayOfMonth + ageDay;
    }

    var ageHour = today.getHours() - dob.getHours();
    if (ageHour < 0) {
        ageHour = 24 + ageHour;
        ageDay--;
    }

    var ageMinute = today.getMinutes() - dob.getMinutes();
    if (ageMinute < 0) {
        ageMinute = 60 + ageMinute;
        ageHour--;
    }

    var ageSecond = today.getSeconds() - dob.getSeconds();
    if (ageSecond < 0) {
        ageSecond = 60 + ageSecond;
        ageMinute--; 
    }

    var ageOutput = ageYear + " years, " + ageMonth + " months, " + ageDay + " days, " + ageHour + " hours, " + ageMinute + " minutes, " + ageSecond + " seconds";

    document.getElementById('age').innerText = ageOutput;
    document.getElementById('result').style.display = 'block';
}

function resetForm() {
    document.getElementById("ageCalculatorForm").reset();
    document.getElementById('result').style.display = 'none';
}


function resetForm() {
    document.getElementById("ageCalculatorForm").reset();
    document.getElementById('result').style.display = 'none';
}