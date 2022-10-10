const opdracht1 = (temperature) => {
    if (temperature < 10) {
        alert("!!! KOUD !!!");
        return;
    }
    if (temperature < 16) {
        document.body.innerHTML = "Het is niet warm. Jas aangeraden";
        return;
    }
    if (temperature < 24) {
        document.body.innerHTML = "Het is niet koud, maar ook niet heel warm";
        return;
    }
    if (temperature < 30) {
        document.body.innerHTML = "Het is warm. Jas niet aangeraden";
        return;
    }
    document.body.innerHTML = "!!! WARM !!!"
    return;
}

const opdracht2 = (grade) => {
    if (grade < 5.5) {
        document.body.innerHTML += "<br> ONVOLDOENDE | " + grade;
    } else {
        document.body.innerHTML += "<br> VOLDOENDE | " + grade;
    }
}

const opdracht3 = (number) => {
    if (number % 2 == 1) {
        document.body.innerHTML = false;
    } else {
        document.body.innerHTML = true;
    }
}