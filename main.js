const input = document.getElementById('input');
const wordContainer = document.getElementById('word-container');
const addBtn = document.getElementById('btn-add');
const deleteBtn = document.getElementById('btn-del');

let queue;

localStorage.length < 1 ? (queue = []) : (queue = JSON.parse(localStorage.getItem("queue")));

const addOnPage = () => {
    wordContainer.innerHTML = `<h3>${queue.join('; ')}</h3>`;
}

addOnPage();

// Adds words to the queue
const addToQueue = () => {
    queue.push(input.value);
    addOnPage();
    localStorage.setItem("queue", JSON.stringify(queue));
}

// Removes words from the queue
const removeFromQueue = () => {
    queue.shift();
    addOnPage();
    localStorage.setItem("queue", JSON.stringify(queue));
}

// Clears input
const clearInput = () => {
    input.value = '';
}

// Check if input is not empty
const checkInput = () => {
    if (input.value.length <= 0) {
        input.classList.add('error');
        alert('Enter a word!');
        clearInput();
        input.focus()
    } else {
        if (queue.length <= 21) {
            input.classList.remove('error');
            addToQueue();
            clearInput();
        } else {
            alert('You entered a maximum of allowed words!');
            input.classList.remove('error');
            clearInput();
        }
    }
}

input.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        checkInput();
    }
});

addBtn.addEventListener('click', () => {
    checkInput();
});

deleteBtn.addEventListener('click', () => {
    removeFromQueue();
    clearInput();
})

