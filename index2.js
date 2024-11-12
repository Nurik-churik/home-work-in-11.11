let num = parseInt(prompt("Факториалын есептеу үшін сан енгізіңіз:"));
    
    if (num < 0) {
        console.log("Факториалды тек 0 немесе одан жоғары сандар үшін есептей аламыз");
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log(`Санның факториалы: ${factorial}`);
    }