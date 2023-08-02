// JavaScript код
var players = {
    1: 'Игрок 1',
    2: 'Игрок 2',
};

function showMenu(action, playerNumber) {
    var menu = document.getElementById('menu');
    menu.style.display = 'block';
    menu.dataset.action = action;
    menu.dataset.player = playerNumber;
}

function closeMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = 'none';
}

document.getElementById('menu').addEventListener('change', function() {
    var selectedPlayerNumber = document.getElementById('player-select').value;
    var selectedPlayerName = players[selectedPlayerNumber];
    var action = this.dataset.action;
    var playerNumber = this.dataset.player;
    alert('Для ' + players[playerNumber] + ' выбран игрок ' + selectedPlayerName + ' для действия "' + action + '"');
});

function updatePlayerNames() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    players[1] = player1 || 'Игрок 1';
    players[2] = player2 || 'Игрок 2';
    updatePlayerNamesOnPage();
}

function updatePlayerNamesOnPage() {
    document.getElementById('player1').value = players[1];
    document.getElementById('player2').value = players[2];
    // Обновляем текст существующих надписей на странице
    var pickLabel1 = document.getElementById('player-label-1');
    pickLabel1.textContent = 'Пик: ' + players[1];
    var banLabel1 = document.getElementById('player-label-1');
    banLabel1.textContent = 'Бан: ' + players[1];
    var pickLabel2 = document.getElementById('player-label-2');
    pickLabel2.textContent = 'Пик: ' + players[2];
    var banLabel2 = document.getElementById('player-label-2');
    banLabel2.textContent = 'Бан: ' + players[2];
}

// Функция для обновления опций селекта
function updateSelectOption(playerNumber) {
    var playerNameInput = document.getElementById('player' + playerNumber);
    var playerName = playerNameInput.value;
    var selectOption = document.querySelector('#player-select option[value="' + playerNumber + '"]');
    selectOption.textContent = playerName;
}

// Функция для принятия выбора "Пик" или "Бан" и отображения надписи на картинке
function acceptPickBan() {
    var menu = document.getElementById('menu');
    var action = menu.dataset.action;
    var playerNumber = menu.dataset.player;
    var selectedPlayerNumber = document.getElementById('player-select').value;
    var pickedPlayerName = players[selectedPlayerNumber];

    // Обновляем надпись на картинке
    var playerLabel = document.getElementById('player-label-' + playerNumber);
    playerLabel.textContent = action + ': ' + pickedPlayerName;
    playerLabel.classList.add(action === 'Пик' ? 'pick-label' : 'ban-label');
    playerLabel.style.display = 'block';

    // Закрываем меню
    closeMenu();
}

// Добавляем обработчик для кнопки "Принять"
document.getElementById('accept-button').addEventListener('click', acceptPickBan);

// Обновляем имена игроков на странице при загрузке
updatePlayerNamesOnPage();
