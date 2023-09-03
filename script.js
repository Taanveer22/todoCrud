function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // console.log(todos);
    // data and todos are same elements
    // 1st: get the container
    const todosContainer = document.getElementById('todos-container');
    for (let todo of todos) {
        // console.log(todo);
        // 2nd: create clild elements of container
        const todosDiv = document.createElement('div');
        todosDiv.classList.add('two-hundred-todos');
        // 3rd: set innerhtml or innertext
        todosDiv.innerHTML = `
                                <h4>userId: ${todo.userId} </h4>
                                <h5>id: ${todo.id} </h5>
                                <p>title: ${todo.title} </p>
                                <p>status: ${todo.completed === true ? 'complete': 'not complete'} </p>
        `
        // 4th: appendchild all elements to container
        todosContainer.appendChild(todosDiv);
    }

}


loadTodos();