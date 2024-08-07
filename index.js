// Define the Project object with methods
const Project = {
    title: "",
    tasks: [],

    createColumnElement: function() {
        // Create elements
        const column = document.createElement('div');
        const columnTitle = document.createElement('h2');
        const taskList = document.createElement('ul');

        // Set content
        column.className = 'column';
        columnTitle.textContent = this.title;

        // Append elements to the column
        column.appendChild(columnTitle);
        column.appendChild(taskList);

        // Return the column element
        return column;
    },

    appendToDOM: function(containerId) {
        // Get the container element
        const container = document.getElementById(containerId);
        if (container) {
            // Create the column element
            const columnElement = this.createColumnElement();
            // Append the column element to the container
            container.appendChild(columnElement);
        } else {
            console.error(`Container with id "${containerId}" not found.`);
        }
    }
};

// Create Home and Work project objects
const homeProject = Object.create(Project);
homeProject.title = 'Home';

const workProject = Object.create(Project);
workProject.title = 'Work';

// Append the columns to the container
homeProject.appendToDOM('container');
workProject.appendToDOM('container');