const addtodoBtn = document.getElementById('addtodoBtn');
const input = document.getElementById('addtodo');
const text = input.value.trim();
const taskList = document.getElementById('tasklist');
const finishedList = document.getElementById('finishedlist');




// function timeStamp() {
//     const time = new Date();
//     const day = time.getDate();
//     const month = time.getMonth() + 1;
//     const year = time.getFullYear();
//     const hours = time.getHours();
//     const minutes = time.getMinutes();

//     let formattedTime = `${day}/${month}/${year} ${hours}:${minutes}`;
//     const sub = document.createElement('sub');


//     sub.textContent = formattedTime;
//     sub.classList.add('sub');
//     return sub;
// }



// function updateStorage() {
//         const todoArray = [];
//         taskList.querySelectorAll('li span').forEach(span => {
//             todoArray.push({text: span.textContent, status: 'task'});
//         });
//         finishedList.querySelectorAll('li span').forEach(span => {
//             todoArray.push({text: span.textContent, status: 'finished'});
//         });

//         localStorage.setItem('todoArray', JSON.stringify(todoArray));
// }



// function addTodo() {
//     const input = document.getElementById('addtodo');
//     const text = input.value.trim();
//     if(text === '') {
//         alert('Enter a todo task...');
//         return
//     }
//         const task = document.createElement('li');
//         const span = document.createElement('span');
//         span.textContent = text;

//         const del = document.createElement('button');
//         del.textContent = 'delete';
//         del.addEventListener('click', () => {
//             task.remove()
//             updateStorage();
//             });

//         const finish = document.createElement('button');
//         finish.textContent = 'finish';
//         finish.addEventListener('click', () => {
//             task.remove();
            
//             task.querySelectorAll('button').forEach(e => e.remove());
//             task.querySelector('sub')?.remove();

//             const finishTime = timeStamp();
            
//             // did d reverse feature in classes first trying 2 implement in here afterwards lol, hope i don't mess it up...

//                 const reverseBtn = document.createElement('button');
//             reverseBtn.textContent = 'reverse';

//             reverseBtn.addEventListener('click', () => {
//                 task.remove();

//                 task.querySelectorAll('button').forEach(e => e.remove());
//                 // task.querySelector('sub')?.remove();
//                 const del2 = document.createElement('button');
//                 del2.textContent = 'delete';
//                 del2.addEventListener('click', () => task.remove());
                
//                 task.appendChild(del2);

//                 task.appendChild(finish);

//                 taskList.appendChild(task);
//                 updateStorage();

//             });
            
//                 task.appendChild(finishTime);

//                 task.appendChild(del);
//                 task.appendChild(reverseBtn);
//                 finishedList.appendChild(task);
//                 updateStorage();
//         });

//         task.appendChild(span);
//         task.appendChild(timeStamp());
//         task.appendChild(del);
//         task.appendChild(finish)
//         taskList.appendChild(task);
//         updateStorage();
//         input.value = '';


// }

// window.addEventListener('load', () => {
//             const savedTodos = JSON.parse(localStorage.getItem('todoArray')) || [];

//             savedTodos.forEach(todoArray => {
//                 const input = document.getElementById('addtodo');
//                 input.value = todoArray.text;
//                 addTodo();
            

//             if(todoArray.status === 'finished') {
//                 const lastLi = taskList.lastElementChild;
//                 const finishBtn = lastLi.querySelector('button:nth-of-type(2)');
//                 if(finishBtn) finishBtn.click();
//             }
//         })
//     });


// addtodoBtn.addEventListener('click', addTodo);







class deleteBtn {
    constructor(taskEl) {
        this.taskEl = taskEl;
    }
    del() {
        const del = document.createElement('button');
        del.textContent = 'delete';
        del.addEventListener('click', () => {
            this.taskEl.remove();});

            return del;
    }
}


class finishedBtn {
    constructor(taskEl, finishedList, taskList) {
        this.taskEl = taskEl;
        this.taskList = taskList;
        this.finishedList = finishedList;
    }
    fin() {
        const finish = document.createElement('button');
        finish.textContent = 'finish';
        finish.addEventListener('click', () => {
            // const li = this.taskEl;

            this.taskEl.querySelectorAll('button').forEach(e => e.remove());
            this.taskEl.querySelectorAll('sub').forEach(sub => sub.remove());

            const reverseBtn = document.createElement('button');
            reverseBtn.textContent = 'reverse';

            reverseBtn.addEventListener('click', () => {
                this.taskEl.remove();

                this.taskEl.querySelectorAll('button').forEach(e => e.remove());

                const del = new deleteBtn(this.taskEl).del();

                const fin = new finishedBtn(this.taskEl, finishedList, taskList).fin();

                this.taskEl.appendChild(del);
                this.taskEl.appendChild(fin);
                taskList.appendChild(this.taskEl);

                const saver = new savedTodos(taskList);
                saver.save();
            });

            const deleteBtn2 = new deleteBtn(this.taskEl).del();
            const time = new timeStamp();


            this.taskEl.appendChild(time.timing())

            this.taskEl.appendChild(deleteBtn2);

            this.taskEl.appendChild(reverseBtn);
            
            finishedList.appendChild(this.taskEl);

            const saver = new savedTodos(finishedList);
            saver.save();
            });
        return finish
    }
}



class addTodo {
    constructor(input, taskList, finishedList, timeStamp) {
        this.input = input;
        this.timeStamp = timeStamp;
        this.finishedList = finishedList;
        this.taskList = taskList;

    }

    add() {

        if(input.value.trim() === '') {
            alert('Enter a todo task...');
            return;
        }
        

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = input.value.trim();

        const dele = new deleteBtn(li).del();

        const finis = new finishedBtn(li, finishedList).fin();
        const time = new timeStamp();
        

        li.appendChild(span);
        li.appendChild(time.timing())
        li.appendChild(dele);
        li.appendChild(finis)
        taskList.appendChild(li);

        const saver = new savedTodos(taskList);
        saver.save();

        input.value = '';

        
    }
}


class timeStamp {
    constructor() {
    }
    timing() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    let formattedTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    const sub = document.createElement('sub');


    sub.textContent = formattedTime;
    sub.classList.add('sub');
    return sub;
    }
}



class savedTodos {
    constructor(addTodo) {
        this.addTodo = addTodo;
    }
    save() {
        const todoArray = [];
        taskList.querySelectorAll('li span').forEach(span => {
            todoArray.push({text: span.textContent, status: 'task'});
        });
        finishedList.querySelectorAll('li span').forEach(span => {
            todoArray.push({text: span.textContent, status: 'finished'});
        });

        localStorage.setItem('todoArray', JSON.stringify(todoArray));
    }
}


class windowLoader {
    constructor(savedTodos) {
        this.savedTodos = savedTodos;
    }

    loader() {
        
        window.addEventListener('load', () => {
            const savedTodos = JSON.parse(localStorage.getItem('todoArray')) || [];

            savedTodos.forEach(todoArray => {
                const input = document.getElementById('addtodo');
                input.value = todoArray.text;
                const addingTodo = new addTodo();
                addingTodo.add();
            

            if(todoArray.status === 'finished') {
                const lastLi = taskList.lastElementChild;
                const finishBtn = lastLi.querySelector('button:nth-of-type(2)');
                if(finishBtn) finishBtn.click();
            }
        })
    });
    }
}

addtodoBtn.addEventListener('click', () => {
    const todo = new addTodo(input, taskList, finishedList);
    todo.add();
    
    input.value = '';

})

const WindowLoad = new windowLoader();
WindowLoad.loader();


