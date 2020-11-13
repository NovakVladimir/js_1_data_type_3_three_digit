function changeVisibility() {
    document.getElementById("resultImg").style.visibility = 'visible';
}

function changeVisibility_2() {
    document.getElementById("resultImg").style.visibility = 'hidden';
}

function isEqual() {
    let numb = document.digForm.digInput.value;
    let ar = numb.split("").sort();
    for(let i = 1; i < ar.length; i++) {
        if(ar[i] === ar[i-1]) {
            return changeVisibility();
        }
    }  
    return changeVisibility_2();
}