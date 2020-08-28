// funções fornecidas na questão

function gerarNumeroInteiroAleatorio(min, max) {
	// número fracionário aleatório maior ou igual a 0 e menor que 1
	const aleatorioDeBase = Math.random();
	// número fracionário aleatório maior ou igual a 0 e menor que (max - min + 1)
	const aleatorioFracionario = Math.random() * (max - min + 1);
	// número inteiro aleatório maior ou igual a 0 e menor ou igual a (max - min)
	// Math.trunc tira a parte fracionária de um número: 0,5 vira 0, 1,25 vira 1, etc
	const aleatorioInteiro = Math.trunc(aleatorioFracionario);
	// número inteiro aleatório maior ou igual a min e menor ou igual a max
	return min + aleatorioInteiro;
}

function gerarCorAleatoria() {
	const vermelho = gerarNumeroInteiroAleatorio(0, 255);
	const verde = gerarNumeroInteiroAleatorio(0, 255);
	const azul = gerarNumeroInteiroAleatorio(0, 255);
	
	return "rgb(" + vermelho + ", " + verde + ", " + azul + ")";
}

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}

// fim das funções fornecidas na questão

//variaveis necessarias
let sorteio = null, contador = 0;
let quadrado = document.querySelector(".quadrado");
const botao1 = document.querySelector(".button1");
const botao2 = document.querySelector(".button2");
const botao3 = document.querySelector(".button3");


//sorteando a cor
const sorteioCor = () => {
    let cor = gerarCorAleatoria();
    quadrado.style["background-color"] = cor;
    sorteioBotoes(cor);
}


//sorteando o botão correto e colocando cores nos outros botões

const sorteioBotoes = (cor) => {
    botoes = ['botao1', 'botao2', 'botao3'];
    sorteio = escolherElementoAleatorio(botoes);

    if(sorteio==='botao1'){
        botao1.innerText= cor;
        botao2.innerText = gerarCorAleatoria();
        botao3.innerText = gerarCorAleatoria();
    }else if(sorteio==='botao2'){
        botao2.innerText= cor;
        botao1.innerText = gerarCorAleatoria();
        botao3.innerText = gerarCorAleatoria();
    }else{
        botao3.innerText= cor;
        botao1.innerText = gerarCorAleatoria();
        botao2.innerText = gerarCorAleatoria();
    }
}

//verificando o click
botao1.addEventListener("click", () => {
    if(sorteio==="botao1"){
        alert("Parabéns, acertou!");
        contador++;
    }else{
        alert("Não foi dessa vez!");
    }
    venceu(contador);
    sorteioCor();
})

botao2.addEventListener("click", () => {
    if(sorteio==="botao2"){
        alert("Parabéns, acertou!");
        contador++;
    }else{
        alert("Não foi dessa vez!");
    }
    venceu(contador);
    sorteioCor();
})

botao3.addEventListener("click", () => {
    if(sorteio==="botao3"){
        alert("Parabéns, acertou!");
        contador++;
    }else{
        alert("Não foi dessa vez!");
    }
    venceu(contador);
    sorteioCor();
})

//verificando a quantidade de acertos

const venceu = (contador) => {
    if(contador===10){
        alert("Parabéns! Você venceu!");
    }else if (contador>5 && contador<10){
        alert(`Tamo quase lá, você acertou ${contador} vezes!`);
    }else{
        alert(`Vamo que dá, você acertou ${contador} vez(es)!`)
    }
}


sorteioCor();




