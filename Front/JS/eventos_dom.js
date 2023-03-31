//copilot make a code for the following excercises
// 1. Modifica el siguiente elemento para mostrar la posición del mouse en el documento:
const mousePosition = document.getElementById('mousePosition');

// add a mousemove event listener to the document
document.addEventListener('mousemove', event => {
  const xPos = event.pageX;
  const yPos = event.pageY;
  // update the textContent of the mousePosition element
  mousePosition.textContent = `Posición del mouse: (${xPos}, ${yPos})`;
});

// 2. Al dar click al siguiente botón, obtén el nombre y apellido de las siguientes cajas de texto, y agrega, después del botón, un elemento que tenga el nombre completo.
// get a reference to the form element and the submit button
const form = document.querySelector("#form1");
const submitButton = document.querySelector("#form1-submit");

// add a click event listener to the submit button
submitButton.addEventListener("click", (event) => {
  // prevent the default form submission behavior
  event.preventDefault();
  
  // get the values of the first name and last name inputs
  const firstName = document.querySelector("#form-fname").value;
  const lastName = document.querySelector("#form-lname").value;
  
  // concatenate the first and last names into a full name string
  const fullName = firstName + " " + lastName;
  
  // create a new <p> element to hold the full name
  const fullNameElement = document.createElement("p");
  fullNameElement.textContent = "Full name: " + fullName;
  
  // insert the new <p> element after the submit button
  submitButton.insertAdjacentElement("afterend", fullNameElement);
});

//3. Agrega el código para agregar una fila, o una columna, a la siguiente tabla al dar click al botón correspondiente.

// Get the table and buttons elements by their IDs
const table = document.getElementById('sampleTable');
const insertRowButton = document.getElementById('btn-insert-r');
const insertColumnButton = document.getElementById('btn-insert-c');

// Add event listeners to the buttons
insertRowButton.addEventListener('click', () => {
  // Insert a new row at the end of the table
  const newRow = table.insertRow(-1);
  // Create two cells in the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  // Set the content of the cells
  cell1.innerHTML = 'New row column 1';
  cell2.innerHTML = 'New row column 2';
});

insertColumnButton.addEventListener('click', () => {
  // Loop through each row in the table
  for (let i = 0; i < table.rows.length; i++) {
    // Insert a new cell at the end of the row
    const newCell = table.rows[i].insertCell(-1);
    // Set the content of the cell
    newCell.innerHTML = 'New column';
  }
});


//4 . Incluye dos cajas de input, para solicitar al usuario la posición de la fila y columna de la siguiente tabla, y otra para solicitar un texto. Al apretar el botón, actualiza el contenido de esa tabla en la posición que solicitaste, con la cadena de texto que solicitaste.

// Get references to the DOM elements
const rowIndexInput = document.getElementById('rowIndex');
const colIndexInput = document.getElementById('colIndex');
const newValueInput = document.getElementById('newValue');
const changeButton = document.getElementById('btn-change');
const tbl = document.getElementById('myTable');

// Add click event listener to the button
changeButton.addEventListener('click', () => {
  // Get the row and column index values from the input fields
  const rowIndex = parseInt(rowIndexInput.value) - 1; // Subtract 1 because array indices start from 0
  const colIndex = parseInt(colIndexInput.value) - 1;

  // Get the new value from the input field
  const newValue = newValueInput.value;

  // Get the table row and cell at the specified indices
  const row = tbl.rows[rowIndex];
  const cell = row.cells[colIndex];

  // Set the text content of the cell to the new value
  cell.textContent = newValue;
});

//5. Agrega el código para quitar o agregar elementos a la lista de opciones. Los colores pueden ser aleatorios.
// Get the HTML elements
const colorSelect = document.getElementById('colorSelect');
const btnAddColor = document.getElementById('btn-add-color');
const btnRmvColor = document.getElementById('btn-rmv-color');

// Add event listener to the Add color button
btnAddColor.addEventListener('click', () => {
  // Create a new option element
  const option = document.createElement('option');
  // Generate a random color and set it as the option text
  option.textContent = getRandomColor();
  // Append the new option to the select element
  colorSelect.appendChild(option);
});

// Add event listener to the Remove color button
btnRmvColor.addEventListener('click', () => {
  // Get the selected option and remove it
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  colorSelect.removeChild(selectedOption);
});

// Function to generate a random color
function getRandomColor() {
  const colors = ['Red', 'Green', 'White', 'Black'];
  return colors[Math.floor(Math.random() * colors.length)];
}


//6. Al poner el mouse encima de la siguiente imagen, genera dos números aleatorios entre 300 y 600 para el width y height de una imagen. Reemplaza la imagen de placeholder por otra similar con el tamaño random que generaste. El evento solo se dispara cuando el mouse entra en la imagen.

const imagenGato = document.getElementById('imagenGato');

// Add event listener for when mouse enters image
imagenGato.addEventListener('mouseenter', () => {
  // Generate random width and height between 300 and 600
  const randomWidth = Math.floor(Math.random() * (600 - 300) + 300);
  const randomHeight = Math.floor(Math.random() * (600 - 300) + 300);

  // Create new image element with random width and height
  const newImage = document.createElement('img');
  newImage.src = 'http://placekitten.com/' + randomWidth + '/' + randomHeight;

  // Replace existing image with new image
  imagenGato.parentNode.replaceChild(newImage, imagenGato);
});


