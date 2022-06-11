const genBtn = document.getElementById("gen-btn")

let newPass = []
let totalInput = document.getElementById("total-input")
let displayPass = document.getElementById("display-pass")

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")
let pass3El = document.getElementById("pass3")
let pass4El = document.getElementById("pass4")


genBtn.addEventListener("click", function() {



    if (totalInput.value >= 8 && totalInput.value <= 20) {

        console.log("IN")

        if (newPass) {
            newPass = []
            displayPass.innerHTML = `
        
            <input id="pass1" value="--">
            <input id="pass2" value="--">
            <input id="pass3" value="--">
            <input id="pass4" value="--">
            `
        }


        makeid()
        makeid()
        makeid()
        makeid()

        // displayPass.innerHTML = `

        // <input id="pass1" value="${newPass[0]}">
        // <input id="pass2" value="${newPass[1]}">
        // <input id="pass3" value="${newPass[2]}">
        // <input id="pass4" value="${newPass[3]}">
        // `

        // pass1El.innerHTML = newPass[0]
        // pass2El.innerHTML = newPass[1]
        // pass3El.innerHTML = newPass[2]
        // pass4El.innerHTML = newPass[3]

        pass1El.value = newPass[0]
        pass2El.value = newPass[1]
        pass3El.value = newPass[2]
        pass4El.value = newPass[3]


        pass1El.innerHTML = pass1El.value


        displayPass.innerHTML = `
        
        <input id="pass1" readonly onclick="pass1Fun()" value="${pass1El.value}">
        <input id="pass2" readonly onclick="pass2Fun()" value="${pass2El.value}">
        <input id="pass3" readonly onclick="pass3Fun()" value="${pass3El.value}">
        <input id="pass4" readonly onclick="pass4Fun()" value="${pass4El.value}">
        `

        // console.log(pass1El)

        // console.log(pass1El.value)
        // console.log(pass2El.value)
        // console.log(pass3El.value)
        // console.log(pass4El.value)

        // for (let i = 0; i < 4; i++) {
        //     displayPass.innerHTML += `<input value="` + newPass[i] + `">`
        // }


    } else {

        console.log("OUT")
        minmax()
        newPass = []
        displayPass.innerHTML = `
        
        <input id="pass1" value="--">
        <input id="pass2" value="--">
        <input id="pass3" value="--">
        <input id="pass4" value="--">
        `
    }

})



function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let togen = totalInput.value

    for (var i = 0; i < togen; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    newPass.push(text)
    return text;

}

function minmax() {

    let messageEl = document.getElementById("message-el")
    messageEl.innerHTML = "Min 8 and Max 20"

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'block'
    }, 0000)

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'none'
    }, 2000)

}

function message() {

    let messageEl = document.getElementById("message-el")
    messageEl.innerHTML = "Copied Successfully"

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'block'
    }, 0000)

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'none'
    }, 2000)

}

function error() {

    let messageEl = document.getElementById("message-el")
    messageEl.innerHTML = "Generate Password First"

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'block'
    }, 0000)

    setTimeout(() => {
        document.getElementById('message-el').style.display = 'none'
    }, 2000)

}





function pass1Fun() {

    if (pass1El.value === "--") {
        console.log("NO")
        error()
    } else {
        var copyText = document.getElementById("pass1");
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyText.value);
        message()
    }
}

function pass2Fun() {
    var copyText = document.getElementById("pass2");
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    message()
}

function pass3Fun() {
    var copyText = document.getElementById("pass3");
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    message()
}

function pass4Fun() {
    var copyText = document.getElementById("pass4");
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    message()
}