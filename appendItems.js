
//create main class
export class ToDoItem {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

    createElement() {
        const itemElement = document.createElement('div');
        itemElement.className = 'todo-item';

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${this.description}`;

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = `Due Date: ${this.dueDate}`;

        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${this.priority}`;

           // Create delete button
           const deleteButton = document.createElement('button');
           deleteButton.textContent = 'Delete';
           deleteButton.addEventListener('click', () => {
               itemElement.remove();
           });

        itemElement.appendChild(titleElement);
        itemElement.appendChild(descriptionElement);
        itemElement.appendChild(dueDateElement);
        itemElement.appendChild(priorityElement);
        itemElement.appendChild(deleteButton);    

        return itemElement;
    }

    appendToDOM(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            const itemElement = this.createElement();
            container.appendChild(itemElement);
        } else {
            console.error(`Container with id "${containerId}" not found.`);
        }
    }
}

// Function to create and append a new ToDoItem
export function appendNewToDo(containerId, title, description, dueDate, priority) {
    const newToDo = new ToDoItem(title, description, dueDate, priority);
    newToDo.appendToDOM(containerId);
}



export function createAndAppendColumns() {
    // Create home column
    const homeColumn = document.createElement('div');
    homeColumn.id = 'home-column';
    homeColumn.className = 'column';
    const homeTitle = document.createElement('h2');
    homeTitle.textContent = 'Home';
    homeColumn.appendChild(homeTitle);

    // Create work column
    const workColumn = document.createElement('div');
    workColumn.id = 'work-column';
    workColumn.className = 'column';
    const workTitle = document.createElement('h2');
    workTitle.textContent = 'Work';
    workColumn.appendChild(workTitle);

    // Append columns to the container
    const container = document.getElementById('container');
    container.appendChild(homeColumn);
    container.appendChild(workColumn);
}

// Function to initialize columns and add buttons
export function initializeColumns() {
    createAndAppendColumns();
    createAddButton('home-column');
    createAddButton('work-column');
}


// Function to create an "Add" button and set up event listener
function createAddButton(containerId) {
    const container = document.getElementById(containerId);
    const addButton = document.createElement('button');
    addButton.textContent = 'Add To-Do';
    addButton.addEventListener('click', () => showToDoForm(containerId));
    container.appendChild(addButton);
    console.log('Button added to ' + containerId);
}

// Function to show the form for adding a new to-do item
function showToDoForm(containerId) {
    const formContainer = document.createElement('div');

    const titleInput = document.createElement('input');
    titleInput.placeholder = 'Title';

    const descriptionInput = document.createElement('input');
    descriptionInput.placeholder = 'Description';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';

    const priorityInput = document.createElement('select');
    ['High', 'Medium', 'Low'].forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add To-Do';
    submitButton.addEventListener('click', () => {
        appendNewToDo(containerId, titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
        formContainer.remove();
    });

    formContainer.appendChild(titleInput);
    formContainer.appendChild(descriptionInput);
    formContainer.appendChild(dueDateInput);
    formContainer.appendChild(priorityInput);
    formContainer.appendChild(submitButton);

    const container = document.getElementById(containerId);
    container.appendChild(formContainer);
}
