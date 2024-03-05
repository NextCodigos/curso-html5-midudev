// Obtener los elementos arrastrables
const draggableElements = document.querySelectorAll('[draggable="true"]');
const dropAreaLeft = document.getElementById('dropAreaLeft');
const dropAreaCenter = document.getElementById('dropAreaCenter');
const dropAreaRight = document.getElementById('dropAreaRight');

// Agregar eventos para elementos arrastrables
draggableElements.forEach(element => {
  element.addEventListener('dragstart', dragStart);
});

// Agregar eventos para áreas de soltar
dropAreaLeft.addEventListener('dragover', dragOver);
dropAreaCenter.addEventListener('dragover', dragOver);
dropAreaRight.addEventListener('dragover', dragOver);

dropAreaLeft.addEventListener('drop', drop);
dropAreaCenter.addEventListener('drop', drop);
dropAreaRight.addEventListener('drop', drop);

// Función para el evento dragstart
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Función para el evento dragover
function dragOver(event) {
  event.preventDefault();
}

// Función para el evento drop
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(data);
  const clonedElement = element.cloneNode(true);
  clonedElement.removeAttribute('draggable');
  event.target.appendChild(clonedElement);
}
