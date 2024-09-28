
let globalId = 1;

function markAsDone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!"
}

function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandParent = document.createElement("div");
    firstGrandParent.innerHTML = title;
    const secondGrandParent = document.createElement("div");
    secondGrandParent.innerHTML = description;
    const thirdGrandParent = document.createElement("button");
    thirdGrandParent.innerHTML = "Mark as done";
    thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGrandParent)
    child.setAttribute("id", id);
    return child;
}
function updateDomAssToState(state){
    const parent = document.getElementById('contanier');
    parent.innerHTML = '';
    for(let i=0; i<state.length; i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}
updateDomAssToState([{
    title:'Task1',
    description:'Go to 0-100 Course',
    id: 1
},{
    title:'Task2',
    description:'Go to DSA Course',
    id: 1
}]);

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("todos");

    parent.appendChild(createChild(title, description, globalId++));
}

