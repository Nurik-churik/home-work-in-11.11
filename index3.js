let score = parseInt(prompt("Ұпайыңызды енгізіңіз (0-ден 100 аралығында):"));
    
    if (score < 0 || score > 100) {
        console.log("0-ден 100 аралығында ұпай енгізіңіз");
    } else {
        let grade;
        switch (true) {
            case (score >= 90):
                grade = 'A';
                break;
            case (score >= 80):
                grade = 'B';
                break;
            case (score >= 70):
                grade = 'C';
                break;
            case (score >= 60):
                grade = 'D';
                break;
            default:
                grade = 'F';
        }
        console.log(`Баға: ${grade}`);
    }

    alert(
        "kod bitti"
    )
