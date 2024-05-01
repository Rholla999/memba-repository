let myLead = [];
const inputEl = document.getElementById('input-el');
const btnClick = document.getElementById('input-btn');
const ulEl = document.getElementById('ul');
const delBtn = document.getElementById('del-btn');
const saveBtn = document.getElementById('save-btn');

let newItemInLocalStorage = JSON.parse(localStorage.getItem('myLead'));
if (newItemInLocalStorage) {
  myLead = newItemInLocalStorage;

  rholla(myLead);
}

function rholla(lead) {
  let newItems = '';
  for (let i = 0; i < lead.length; i++) {
    newItems += `
  <li>
  <a target = "_blank" href = "${lead[i]}">
  ${lead[i]}
  </a>
  </li>
  `;
  }
  ulEl.innerHTML = newItems;
}

btnClick.addEventListener('click', () => {
  myLead.unshift(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLead', JSON.stringify(myLead));

  rholla(myLead);
});

delBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLead = [];

  rholla(myLead);
});

saveBtn.addEventListener('click', () => {
  chrome.tab.query({ active: true, currentWindow: true }, (tabs) => {
    myLead.push(tabs[0].url);
    localStorage.setItem('mylead', JSON.stringify(myLead));
    rholla(myLead);
  });
});
