function getBotResponse(input) {

    let mototaxistas = "CLICK AQUI";
    let URL = `https://www.dicionarioinformal.com.br/diferenca-entre/mototaxi/mototaxista/`;

    //rock paper scissors
    if (input == "Preciso de um mototaxi") {
        return `Aqui esta um link com nossos mototaxistas: ${mototaxistas.link(URL)}`;
    } else if (input == "Obrigado") {
        return "Por nada, estou sempre a disposição 😁";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}