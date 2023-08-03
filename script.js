// JavaScript код
var players = {
    1: 'Игрок 1'
    , 2: 'Игрок 2'
    , 3: 'Decider'
, };

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

function updatePlayerNames() {

  players[1] = document.getElementById('player1').value;
  players[2] = document.getElementById('player2').value;
  
  updatePlayerNamesOnPage();
}

function updatePlayerNamesOnPage() {
    document.getElementById('player1').value = players[1];
    document.getElementById('player2').value = players[2];
    document.getElementById('player-label-1').textContent = 'Пик: ' + players[1];
    document.getElementById('player-label-1-ban').textContent = 'Бан: ' + players[1];
    document.getElementById('player-label-2').textContent = 'Пик: ' + players[2];  
    document.getElementById('player-label-2-ban').textContent = 'Бан: ' + players[2];
}

// Функция для обновления опций селекта
function updateSelectOption(playerNumber) {
    const playerNameInput = document.getElementById(`player${playerNumber}`);
    const playerName = playerNameInput.value;
    const selectOption = document.querySelector(`#player-select option[value="${playerNumber}"]`);
    selectOption.textContent = playerName;
    
    // Обновляем значение в объекте players
    players[playerNumber] = playerName;
}

// Функция для принятия выбора "Пик" или "Бан" и отображения надписи на картинке
function acceptPickBan() {
    const menu = document.getElementById('menu');
    const action = menu.dataset.action;
    const playerNumber = menu.dataset.player;
    const selectedPlayerNumber = document.getElementById('player-select').value;
    const pickedPlayerName = players[selectedPlayerNumber];
    // Обновляем надпись на картинке
    const playerLabel = document.getElementById(`player-label-${playerNumber}`);
    playerLabel.textContent = `${action}: ${pickedPlayerName}`;
    playerLabel.classList.add(action === 'Пик' ? 'pick-label' : 'ban-label');
    playerLabel.style.display = 'block';
    // Закрываем меню
    closeMenu();
}
// Добавляем обработчик для кнопки "Принять"
document.getElementById('accept-button').addEventListener('click', acceptPickBan);
// Обновляем имена игроков на странице при загрузке
updatePlayerNamesOnPage();
