const keyInput = document.getElementById('key-input');
const valueInput = document.getElementById('value-input');
const indexInput = document.getElementById('index-input');
const storageLengthSpan = document.getElementById('storage-length');
const storageList = document.getElementById('storage-list');
const actionResult = document.getElementById('action-result');


function updateDisplay() {
  storageList.innerHTML = ''; 
  storageLengthSpan.innerText = localStorage.length; 
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); 
    const value = localStorage.getItem(key);
    
    const li = document.createElement('li');
    li.innerText = key + " : " + value;
    storageList.appendChild(li);
  }
}

document.getElementById('btn-save').addEventListener('click', () => {
  if (keyInput.value) {
    localStorage.setItem(keyInput.value, valueInput.value);
    actionResult.innerText = "Saved successfully!";
    updateDisplay();
  }
});

document.getElementById('btn-retrieve').addEventListener('click', () => {
  const val = localStorage.getItem(keyInput.value);
  if (val !== null) {
    actionResult.innerText = "Retrieved Value: " + val;
  } else {
    actionResult.innerText = "Key not found!";
  }
});

document.getElementById('btn-remove').addEventListener('click', () => {
  localStorage.removeItem(keyInput.value);
  actionResult.innerText = "Item removed!";
  updateDisplay();
});

document.getElementById('btn-clear').addEventListener('click', () => {
  localStorage.clear();
  actionResult.innerText = "All storage cleared!";
  updateDisplay();
});

document.getElementById('btn-getkey').addEventListener('click', () => {
  const idx = parseInt(indexInput.value);
  const keyName = localStorage.key(idx);
  
  if (keyName !== null) {
    actionResult.innerText = "Key at index " + idx + " is: " + keyName;
  } else {
    actionResult.innerText = "No key found at this index.";
  }
});

updateDisplay();