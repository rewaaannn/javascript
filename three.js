let namee;
while (true) {
    namee = prompt("Please enter your name:");
    if (typeof name === 'string' && namee.trim() !== '') {
        break;
    } else {
        alert(" Please enter a valid name.");
    }
}

let birthYear;
while (true) {
    birthYear = prompt("Please enter your birth year:");
    birthYear = parseInt(birthYear);
    if (!isNaN(birthYear) && birthYear < 2010) {
        break;
    } else {
        alert("Invalid birth year. Please enter a number less than 2010.");
    }
}

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;


document.write("Name:" +namee);
document.write("Birth year:" +birthYear);
document.write("Age:" +age);