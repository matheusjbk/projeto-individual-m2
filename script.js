let formulario=document.querySelector('.form');
let mensagem=document.querySelector('#msg');
let codificacao=document.querySelector('#codif');
let numeros=document.querySelector('#numeros');
let incremento=document.querySelector('#incremento');
let codificar=document.querySelector('#encode');
let decodificar=document.querySelector('#decode');
let submit=document.querySelector('#sbmt');
let output=document.querySelector('#output');

//Função para escolher entre Cifra de César ou Base64
formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(codificacao.value=='b64' && codificar.checked){
        output.innerText=codifB64();
    }else if(codificacao.value=='b64' && decodificar.checked){
        output.innerText=decodifB64();
    }else if(codificacao.value=='cesar' && codificar.checked){
        output.innerText=codifCesar();
    }else if(codificacao.value=='cesar' && decodificar.checked){
        output.innerText=decodifCesar();
    }
});

//Função para aparecer o incremento caso a Cifra de César for escolhida
codificacao.addEventListener('click', ()=>{
    if(codificacao.value=='cesar'){
        numeros.style.display='block';
    }else{
        numeros.style.display='none';
    }
})

//Função para codificar a Base64
const codifB64=()=>{
    let msg=document.querySelector('#msg').value;
    let codificada=btoa(msg);
    return codificada;
}

//Função para decodificar a Base64
const decodifB64=()=>{
    let msg=document.querySelector('#msg').value;
    let decodificada=atob(msg);
    return decodificada;
}

//Função para codificar a Cifra de César
function codifCesar(){
    let msg=mensagem.value;
    let resultado='';
    let incre=(incremento.value%26+26)%26;
    for(let i=0; i<msg.length; i++){
        let codAscii=msg[i].charCodeAt();
        if(codAscii >=65 && codAscii <=90){
            resultado+=String.fromCharCode((codAscii-'A'.charCodeAt(0)+incre)%26+'A'.charCodeAt(0));
        }else if(codAscii>=97 && codAscii<=122){
            resultado+=String.fromCharCode((codAscii-'a'.charCodeAt(0)+incre)%26+'a'.charCodeAt(0));
        }else{
            resultado+=msg[i];
        }
    }
    return resultado;
}

//Função para decodificar a Cifra de César
function decodifCesar(){
    let msg=mensagem.value;
    let resultado='';
    let incre=(incremento.value%26-26)%26;
    for(let i=0; i<msg.length; i++){
        let codAscii=msg[i].charCodeAt();
        if(codAscii >=65 && codAscii <=90){
            resultado+=String.fromCharCode((codAscii-'A'.charCodeAt(0)-incre)%26+'A'.charCodeAt(0));
        }else if(codAscii>=97 && codAscii<=122){
            resultado+=String.fromCharCode((codAscii-'a'.charCodeAt(0)-incre)%26+'a'.charCodeAt(0));
        }else{
            resultado+=msg[i];
        }
    }
    return resultado;
}

//Funções para mudar o texto do botão de acordo com o que o usuário quer
codificar.addEventListener('click', ()=>submit.innerText='CODIFICAR');

decodificar.addEventListener('click', ()=>submit.innerText='DECODIFICAR');
