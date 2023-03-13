let timer = undefined;
function displayMessage(p_message, p_color) {
    if(timer != undefined) {
        clearTimeout(timer);
    }
    document.getElementById("request_message").innerHTML = p_message;
    document.getElementById("request_message").style.color = p_color;
    timer = setTimeout(() => {
        document.getElementById("request_message").innerHTML="";
        timer = undefined;
        document.getElementById("request_message").style.color = "black";
    }, 5000);
}

function onSubmit() {
    let user = document.getElementById("request_username").value;
    let phone = document.getElementById("request_phone_name").value;
    let message = "";
    let color = "black";
    if(phone == "" || user == "") {
        message = "Podane dane nie mogą być puste!";
        color = "#610b00";
    }
    else if(phone == "samsung" || phone == "sony" || phone == "motorola") {
        message = "Telefon "+phone+" jest już opisany na naszej stronie!";
        color = "#633c00";
    }
    else {
        message = "Dziękujemy za informację "+user+". Postaramy się jak najszybciej dodać telefon: "+phone+ " do naszej strony!";
        color = "#001b61";
    }
    displayMessage(message, color);
    document.getElementById("request_username").value = "";
    document.getElementById("request_phone_name").value = "";
}



