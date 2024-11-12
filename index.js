let a = parseFloat(prompt("a мәнін енгізіңіз:"));
 let b = parseFloat(prompt("b мәнін енгізіңіз:"));
 let c = parseFloat(prompt("c мәнін енгізіңіз:"));

if (a + b > c && a + c > b && b + c > a) {
        console.log("Бұл үшбұрыш жасай алады");
} else {
        console.log("Бұл үшбұрыш жасай алмайды");
    }
