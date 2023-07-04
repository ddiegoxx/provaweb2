const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const Par = Number (frm.inPar.value);

    if(Par%2 == 0){
        resp.innerText = `${Par} É par.` 
    }else{
        resp.innerText = `${Par} É ímpar.`
    }
})