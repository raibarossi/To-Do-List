const formTarefa = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listTarefas = document.querySelector('#list-tarefas');

formTarefa.addEventListener('submit', function(event) {
    event.preventDefault();

    const textoDaTarefa = inputTarefa.value;

    if (textoDaTarefa.trim() === '') {
        return;
    }

    const novaTarefa = document.createElement('li'); //Cria o novo elemento da lista
    novaTarefa.className = 'task-item';
    const checkbox = document.createElement('input'); // Cria o checkbox
    checkbox.setAttribute('type', 'checkbox');

    const textoTarefaSpan = document.createElement('span');
    textoTarefaSpan.textContent = textoDaTarefa;

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(textoTarefaSpan)

    listTarefas.appendChild(novaTarefa);
    inputTarefa.value = '';
});