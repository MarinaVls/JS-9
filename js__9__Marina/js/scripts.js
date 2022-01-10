window.addEventListener('load', function () {
    let task = document.querySelector('.task');
    let taskList = document.querySelector('.task-list');
    let total = document.querySelector('.total');
    let result = document.querySelector('.result');
    let clearBtn = document.querySelector(".clear");

    let countOfTasks = 0;

    task.addEventListener('keypress', function (event) {
        let key = 13;
        if (event.which == key) {
            if (task.value == '') {
                return
            }
            createDelElements(task.value)
            task.value = "";
        }
    })

    function createDelElements(value) {
        
        countOfTasks++;

        let li = document.createElement("li");
        let div = document.createElement("div");

        li.classList.add("task-item");
        li.textContent = value;
        taskList.appendChild(li);

        div.classList.add("task-item__buttons");
        li.appendChild(div);

        addEditBtn(div, li);
        addRemoveBtn(div,li);

        li.addEventListener('dblclick', () => {
            li.classList.toggle('active');
        }); 

        showTotalTasks();
        
    }

    function addRemoveBtn(div, li) {
        let removeBtn = document.createElement("input");

        removeBtn.classList.add("btn");
        removeBtn.value = 'Удалить';
        div.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
            countOfTasks--;
            showTotalTasks();

            taskList.removeChild(li);
        });
    }

    function addEditBtn(div, li) {
        let editBtn = document.createElement("input");

        editBtn.classList.add("edit");
        editBtn.value = 'Редактировать';
        div.appendChild(editBtn);

        editBtn.addEventListener('click', () => {
            let editText = prompt('Введите изменение текста' , li.textContent) ;
            li.innerHTML = editText;
            li.appendChild(div);   //зачем?
        });
    }

    function showTotalTasks () {
        total.textContent = countOfTasks;
    }

    clearBtn.addEventListener("click", () => {
        taskList.innerHTML = "";
        total.innerHTML = "";
        countOfTasks = 0;
    })

})

