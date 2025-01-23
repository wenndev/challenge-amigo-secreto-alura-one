//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.



let amigos = []


function adicionarAmigo() {
    let amigo = document.querySelector('#amigo');
    let nomeAmigo = amigo.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(nomeAmigo);
        amigo.value = '';
        console.log(amigos);
        atualizarLista();
    }
}


function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear. ')
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    console.log(amigoSorteado);

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;


}

function resetar() {
    alert('Começar outro sorteio ?')

    const ulResultado = document.getElementById('resultado')
    ulResultado.innerHTML = ''

    const ulListaDeAmigos = document.getElementById('listaAmigos')
    ulListaDeAmigos.innerHTML = ''

    nomes = []
}