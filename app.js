const friendNameInput = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const friendList = document.getElementById('listaAmigos');
const drawButton = document.querySelector('.button-draw');
const result = document.getElementById('resultado');

let friends = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    const name = friendNameInput.value.trim();

    if (name === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    friends.push(name);
    friendNameInput.value = '';
    updateFriendList();
}

// Atualiza a lista exibida
function updateFriendList() {
    friendList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendList.appendChild(li);
    });
}

// Sorteia um amigo
function sortearAmigo() {
    if (friends.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    result.innerHTML = `<li>O amigo secreto é: ${selectedFriend}</li>`;
}