let modal = document.getElementById('modal');
let modalTitle = document.getElementById('modalTitle');
let openCreateBtn = document.getElementById('openCreateBtn');
let submit = document.getElementById('submitBtn');

openCreateBtn.addEventListener('click', function () {
    modalTitle.textContent = 'Create a new task';
    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        modalTitle.classList.add('opacity-100');
    }, 100);
});

submit.addEventListener('click', function () {
    let taksInput = document.getElementById('taks');
    let deadlineInput = document.getElementById('deadline');

    let taksValue = taksInput.value.trim();
    let deadlineValue = deadlineInput.value;

    // Validasi input kosong
    if (taksValue === '' || deadlineValue === '') {
        alert('Isi semua field dulu, bro!');
        return;
    }

    let id = Math.floor(Math.random() * 100000);
    let container = document.getElementById('container');

    let newTask = document.createElement('div');
    newTask.classList.add(
        'pl-10', 'w-full', 'grid', 'grid-flow-col',
        'grid-cols-12', 'py-3', 'pr-8', 'hover:border', 'rounded-md'
    );
    newTask.id = 'taks-' + id;

    // Checkbox
    let checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('col-span-1');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-' + id;
    checkboxContainer.appendChild(checkbox);

    // Task
    let taksContainer = document.createElement('div');
    taksContainer.classList.add('col-span-5');

    let taks = document.createElement('p');
    taks.textContent = taksValue;
    taks.classList.add('text-md', 'font-semibold');
    taks.id = 'taks-' + id;
    taksContainer.appendChild(taks);

    // Deadline
    let deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('col-span-5');

    let deadline = document.createElement('p');
    deadline.textContent = deadlineValue;
    deadline.classList.add('text-md', 'font-semibold');
    deadline.id = 'deadline-' + id;
    deadlineContainer.appendChild(deadline);

    // Gabung semua elemen
    newTask.appendChild(checkboxContainer);
    newTask.appendChild(taksContainer);
    newTask.appendChild(deadlineContainer);
    container.appendChild(newTask);

    // Bersihkan input
    taksInput.value = '';
    deadlineInput.value = '';

    // Tutup modal
    modal.classList.add('opacity-0');
    modal.classList.remove('opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
});

document.addEventListener('click', function (event) {
    let taksInput = document.getElementById('taks');
    let deadlineInput = document.getElementById('deadline');

    if (event.target === modal) {
        taksInput.value = '';
        deadlineInput.value = '';
        modal.classList.add('opacity-0');
        modal.classList.remove('opacity-100');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
});
