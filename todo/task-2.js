let input = document.getElementById("todo-name");
let submit = document.getElementById("submit");
let todoList = document.querySelector(".list-group");

submit.addEventListener("click", function() {
    if (input.value === "") {
        alert("Kolom harus diisi");
    } else {
        let todo = `<li class="list-group-item d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox">
        <label class="form-check-label">${input.value}</label>
        <button class="badge border-0 bg-danger btn-delete">x</button>
      </li>`;
        todoList.innerHTML += todo;
        let checkTodo = document.querySelectorAll(".form-check-input");
        for (let i = 0; i < checkTodo.length; i++) {
            const element = checkTodo[i];
            element.addEventListener("change", function() {
                let todoLabel = element.nextElementSibling
                todoLabel.classList.toggle('text-decoration-line-through')
            });
        }

        let btnDel = document.querySelectorAll('.btn-delete')
        for (let x = 0; x < btnDel.length; x++) {
            const hapus = btnDel[x];
            hapus.addEventListener('click', function() {
                hapus.parentElement.remove()
            })
        }
    }
});