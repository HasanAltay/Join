let todos = [
    {
        'id': 0,
        'department': 'Design',
        'title': 'Website redesign',
        'category': 'Todo',
        'description': 'Modify the contents of the main website'
    },
    {
        'id': 1,
        'department': 'Marketing',
        'title': 'Social media Strategy',
        'category': 'In progress',
        'description': 'Develop an ad campaign for brand positioning'
    },
    {
        'id': 2,
        'department': 'Sales',
        'title': 'Call potencial clients',
        'category': 'Awaiting Feedback',
        'description': 'Make the product presentation to the prospective buyers'
    },
    {
        'id': 3,
        'department': 'Backoffice',
        'title': 'Accounting Invoices',
        'category': 'Done',
        'description': 'Write open invoices for customer'
    }
];

let currentDraggedElement;
let urgentClicked = false;
let mediumClicked = false;
let lowClicked = false;
let dropdownClicked = false;
let clicked_You = false;
let clicked_Contact = false;


function updateHTML() {
    let todo = todos.filter(t => t['category'] == 'Todo');

    document.getElementById('todo').innerHTML = '';

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
    }


    let inProgress = todos.filter(t => t['category'] == 'In progress');

    document.getElementById('inProgress').innerHTML = '';

    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
    }


    let awaitingFB = todos.filter(t => t['category'] == 'Awaiting Feedback');

    document.getElementById('awaitingFB').innerHTML = '';

    for (let index = 0; index < awaitingFB.length; index++) {
        const element = awaitingFB[index];
        document.getElementById('awaitingFB').innerHTML += generateTodoHTML(element);
    }


    let done = todos.filter(t => t['category'] == 'Done');

    document.getElementById('done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
    }
}

function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div onclick="openTodoInfo('bo_popUp${element['id']}')" draggable="true" ondragstart="startDragging(${element['id']})" class="bo_todo c-pointer">
              <div class="bo_todo_infos">
                <span class="bo_department font16-400">${element['department']}</span>
                <br>
                  <div class="bo_todo_title font16-700">${element['title']}</div>
                   <div>
                    <div class="font16-400">${element['description']}</div>
                  </div>
                  <br>
                  <div class="bo_todo_contacts_prio">
                    <div>Contacts</div>
                    <div>Prio Btn</div>
                  </div>
               </div>
                ${showTodoPopUp(element)}
            </div>`;          
}

function showTodoPopUp(element) {
    return `<div id="bo_popUp${element['id']}" class="bo_pop_up d-none">
             <div class="bo_popup_todo_Info">
                <div id="boPopUpInfo${element['id']}">
                   <button onclick="closeTodoInfo('bo_popUp${element['id']}', event)" class="bo_cancel_btn c-pointer">
                     <img src="./img/cancel.png">
                   </button>
                     <span class="bo_popUp_department">${element['department']}</span>
                     <br>
                     <div class="mt-25 font61-700">${element['title']}</div>
                        <div>
                         <div class="mt-25 font21-400">${element['description']}</div>
                        </div>
                            <div class="mt-25 font21-400"><span class="mr-20 bo_font21-700">Due date:</span> 05-08-2022</div>
                            <div class="mt-25 font21-400"><span class="mr-20 bo_font21-700">Priority:</span></div>
                            <div class="mt-25 font21-400"><span class="mr-20 bo_font21-700">Assigned to:</span></div>
                                <button onclick="openTodoEdit(${element['id']})" class="bo_edit_todo c-pointer"
                                 onmouseenter="changeEditBtn('./img/edit-light.png', ${element['id']})"
                                 onmouseleave="resetEditBtn('./img/edit-dark.png', ${element['id']})">
                                  <img id="boEditTodo${element['id']}" src="./img/edit-dark.png">
                                </button>
                </div>

             <div id="boEditPopUp${element['id']}" class="bo_edit_task d-none">
                <div class="mb-40">
                 <span class="bo_task_title">Title</span>
                    <input id="bo_task_title${element['id']}" class="bo_task_titlebox" type="text" placeholder="Enter a title" onfocus="this.placeholder=''"
                    onblur="this.placeholder='Enter a title'">
                </div>

                <div class="mb-40">
                  <span class="bo_task_description">Description</span>
                         <textarea id="bo_task_description${element['id']}" class="bo_task_descriptionbox" placeholder="Enter a description"
                             onfocus="this.placeholder=''" onblur="this.placeholder='Enter a description'"></textarea>
                </div>

                <div class="mb-40">
                  <span class="bo_task_date">Due Date</span>
                       <input class="bo_task_datebox" type="date">
                </div>

                <div class="mb-40">
                  <span class="font21-400 bo_prio">Prio</span>
                    <div class="bo_prio_btn">
                        <button id="boPrioUrgent${element['id']}" onclick="BoardChangeToRed(${element['id']})" class="bo_task_prio-urgent"><span id="boWhiteUrgent${element['id']}"
                         class="bo_task_urgent">Urgent</span><img id="boImg-up-white${element['id']}" src="./img/up.png"></button>
                        <button id="boPrioMedium${element['id']}" onclick="BoardChangeToOrange(${element['id']})" class="bo_task_prio-medium"><span id="boWhiteMedium${element['id']}"
                            class="bo_task_medium">Medium</span><img id="boImg-middle-white${element['id']}" src="./img/middle.png"></button>
                        <button id="boPrioLow${element['id']}" onclick="BoardChangeToGreen(${element['id']})" class="bo_task_prio-low"><span id="boWhiteLow${element['id']}"
                        class="bo_task_low">Low</span><img id="boImg-down-white${element['id']}" src="./img/down.png"></button>
                     </div>
                </div>

                <div class="mb-40">
                <span class="bo_task_assigned">Assigned to</span>
                <div id="boDropdownAssigned${element['id']}" class="bo_assign-selection">
                    <div onclick="BoardShowAssigned(${element['id']})" id="boNew_assigned${element['id']}" class="bo_task_dropdown-container">
                        <div class="bo_task_assignedbox">Select contacts to assign</div>
                        <img src="./img/open.png">
                    </div>
                    <div class="bo_task_dropdown-content" id="boContent-assigned${element['id']}">
                        <div id="boAssigned-you${element['id']}" onclick="BoardClickyou(event, ${element['id']})" class="bo_dropdown-assigned">
                            <span class="bo_dropdown-item">You</span>
                            <div class="bo_rectangle" id="bo_rectangle${element['id']}"></div>
                        </div>
                        <div id="boAssigned-contact${element['id']}" onclick="BoardClickcontact(event, ${element['id']})" class="bo_dropdown-assigned">
                            <span class="bo_dropdown-item">Laura Numey</span>
                            <div class="bo_rectangle" id="bo_rectangle${element['id']}"></div>
                        </div>
                        <div onclick="BoardClickinvite(${element['id']})" class="bo_dropdown-assigned">
                            <span class="bo_dropdown-item">Invite new contact</span>
                            <img class="bo_task_img-invite" src="./img/invite-sign.png">
                        </div>
                    </div>
                </div>
                 </div>

                 <button onclick="closeTodoEdit(${element['id']})" class="bo_button_dark ">Ok<img src="./img/check.png"></button>
        </div>
    </div>`;   
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    todos[currentDraggedElement]['category'] = category;
    updateHTML();
}

function filterTodos() {
    let search = document.getElementById('searchTodo').value;
    search = search.toLowerCase();
    console.log(search);

    document.getElementById('todo').innerHTML = '';
    document.getElementById('inProgress').innerHTML = '';
    document.getElementById('awaitingFB').innerHTML = '';
    document.getElementById('done').innerHTML = '';

    let searchedTodo = todos.filter(t => t.category == 'Todo' && t.title.toLowerCase().includes(search))
    let searchedInProgress = todos.filter(t => t.category == 'In progress' && t.title.toLowerCase().includes(search))
    let searchedInAwaitingFeedback = todos.filter(t => t.category == "Awaiting Feedback" && t.title.toLowerCase().includes(search))
    let searchedInDone = todos.filter(t => t.category == "Done" && t.title.toLowerCase().includes(search))

    searchedTodo.forEach(t => document.getElementById('todo').innerHTML += generateTodoHTML(t))
    searchedInProgress.forEach(t => document.getElementById('inProgress').innerHTML += generateTodoHTML(t))
    searchedInAwaitingFeedback.forEach(t => document.getElementById('awaitingFB').innerHTML += generateTodoHTML(t))
    searchedInDone.forEach(t => document.getElementById('done').innerHTML += generateTodoHTML(t))
}

// function openAddTask() {
//   document.getElementById('boAddTaskPopUp').classList.remove('d-none');
//   document.getElementById('boAddTaskPopUp').innerHTML = `<div class="bo_addTask">
//   <button>x</button>
//   <div class="scale_include_down" data-template="./content/add_task.html"></div>
//   </div>`;
//   includeHTML();
// }

// function closeAddTaskPopUp() {
//     document.getElementById('boAddTaskPopUp').classList.add('d-none');
// }

function openTodoInfo(id) {
    document.getElementById(id).classList.remove('d-none');
}

function closeTodoInfo(id, event) {
    document.getElementById(id).classList.add('d-none');
    event.stopPropagation();
}

function changeEditBtn(img, i) {
    document.getElementById('boEditTodo'+ i).src = img;
}

function resetEditBtn(img, i) {
    document.getElementById('boEditTodo'+ i).src = img;
}

function openTodoEdit(i) {
    document.getElementById('boEditPopUp'+ i).classList.remove('d-none');
    document.getElementById('boPopUpInfo'+ i).classList.add('d-none');
}

function closeTodoEdit(i) {
    document.getElementById('boEditPopUp'+ i).classList.add('d-none');
    document.getElementById('boPopUpInfo'+ i).classList.remove('d-none');
}

function changeMobileAddTaskBtn(img) {
    document.getElementById('bo_mobile_AddTaskPlus').src = img;
}

function resetMobileAddTaskBtn(img) {
    document.getElementById('bo_mobile_AddTaskPlus').src = img;
}

function BoardUrgentButtonDefault(i) {
    document.getElementById('boPrioUrgent'+ i).style.backgroundColor = "#FFFFFF";
    document.getElementById('boWhiteUrgent'+ i).style.color = "#000000";
    document.getElementById('boImg-up-white'+ i).src = "./img/up.png";
    urgentClicked = false;
}

function BoardMediumButtonDefault(i) {
    document.getElementById('boPrioMedium'+i).style.backgroundColor = "#FFFFFF";
    document.getElementById('boWhiteMedium'+i).style.color = "#000000";
    document.getElementById('boImg-middle-white'+ i).src = "./img/middle.png";
    mediumClicked = false;
}

function BoardLowButtonDefault(i) {
    document.getElementById('boPrioLow'+ i).style.backgroundColor = "#FFFFFF";
    document.getElementById('boWhiteLow'+ i).style.color = "#000000";
    document.getElementById('boImg-down-white'+ i).src = "./img/down.png";
    lowClicked = false;
}

function BoardChangeToRed(i) {
    if (urgentClicked == false) {
        document.getElementById('boPrioUrgent'+ i).style.backgroundColor = "#FF3D00";
        document.getElementById('boWhiteUrgent'+ i).style.color = "#FFFFFF";
        document.getElementById('boImg-up-white'+ i).src = "./img/arrowUpWhite.png";
        urgentClicked = true;
    } else {
        BoardUrgentButtonDefault(i);
    }
    BoardMediumButtonDefault(i);
    BoardLowButtonDefault(i);
}

function BoardChangeToOrange(i) {
    if (mediumClicked == false) {
        document.getElementById('boPrioMedium'+ i).style.backgroundColor = "#FFA800";
        document.getElementById('boWhiteMedium'+ i).style.color = "#FFFFFF";
        document.getElementById('boImg-middle-white'+ i).src = "./img/arrowMiddleWhite.png";
        mediumClicked = true;
    } else {
        BoardMediumButtonDefault(i);
    }
    BoardUrgentButtonDefault(i);
    BoardLowButtonDefault(i);
}

function BoardChangeToGreen(i) {
    if (lowClicked == false) {
        document.getElementById('boPrioLow'+ i).style.backgroundColor = "#7AE229";
        document.getElementById('boWhiteLow'+ i).style.color = "#FFFFFF";
        document.getElementById('boImg-down-white'+ i).src = "./img/arrowDownWhite.png";
        lowClicked = true;
    } else {
        BoardLowButtonDefault(i);
    }
    BoardUrgentButtonDefault(i);
    BoardMediumButtonDefault(i);
}

function BoardShowAssigned(i) {
    document.getElementById('boDropdownAssigned'+ i).classList.add('bo_task_height');
    if (dropdownClicked == false) {
        document.getElementById("boContent-assigned"+ i).classList.toggle("bo_task_show");
        document.getElementById("boDropdownAssigned"+ i).classList.add("bo_task_dropdown");
        dropdownClicked = true;
    } else {
        BoardShowAssignedDefault(i);
    }
}

function BoardShowAssignedDefault(i) {
    document.getElementById("boContent-assigned"+ i).classList.toggle("bo_task_show");
    document.getElementById("boDropdownAssigned"+ i).classList.remove("bo_task_dropdown");
    dropdownClicked = false;
}

function BoardClickyou(event, i) {
    event.stopPropagation();
    let click = document.getElementById('boAssigned-you'+ i);
    if (clicked_You == false) {
        click.innerHTML = `
        <span class="bo_dropdown-item">You</span>
        <div class="bo_rectangle" id='bo_rectangle${i}'>
            <div class="bo_rectangle-clicked" id='bo_rectangle-clicked${i}'></div>
        </div>`;
        clicked_You = true;
    } else {
        click.innerHTML = `
        <span class="bo_dropdown-item">You</span>
        <div class="bo_rectangle" id='bo_rectangle${i}'></div>`;
        clicked_You = false;
    }
}

function BoardClickcontact(event, i) {
    event.stopPropagation();
    let click = document.getElementById('boAssigned-contact'+ i);
    if (clicked_Contact == false) {click.innerHTML = `
    <span class="bo_dropdown-item">Laura Numey</span>
    <div class="bo_rectangle" id='bo_rectangle${i}'>
        <div class="bo_rectangle-clicked" id='bo_rectangle-clicked${i}'></div>
    </div>`;
    clicked_Contact = true;
    } else {
        click.innerHTML = /*html*/`
        <span class="bo_dropdown-item">Laura Numey</span>
        <div class="bo_rectangle" id='bo_rectangle${i}'></div>`;
        clicked_Contact = false;
    }
}

function BoardClickinvite(i) {
    let invite = document.getElementById('boDropdownAssigned'+ i);
    invite.innerHTML = `
    <div id="contact${i}" class="new_category">
        <input id="boEmail" onclick="BoardSelect_email(i)" class="categorybox caret-hidden" type="text" placeholder="Contact email" onfocus="this.placeholder=''" onblur="this.placeholder='Contact email'">
        <div class="img_new_category">
            <img class="img-cancelSubtask" src='./img/subtask-cancel.png' onclick="BoardDefaultMode()">
            <img src="./img/vertical.png">
            <img class="img-addSubtask" src='./img/addSubtask.png' onclick="BoardSelect_email()">
        </div>
    </div>
    `;
}

function BoardSelect_email(i) {
    document.getElementById('contact').innerHTML = `
    <input id="boEmail${i}" onclick="BoardSelection()" class="categorybox caret-hidden" type="text" placeholder="New category name" onfocus="this.placeholder=''" onblur="this.placeholder='New category name'">
    <div class="img_new_category">
        <img class="img-cancelSubtask" src='./img/subtask-cancel.png' onclick="BoardDefaultMode()">
        <img src="./img/vertical.png">
        <img class="img-addSubtask" src='./img/addSubtask.png' onclick="BoardSelection()">
    </div>`;
    document.getElementById('boEmail'+ i).value = "laura@gmail.com";
}

function BoardDefaultMode(i) {
    document.getElementById('boDropdownAssigned'+ i).innerHTML = `
    <div onclick="BoardShowAssigned(i)" id="boNew_assigned${i}" class="bo_task_dropdown-container">
        <div class="bo_task_assignedbox">Select contacts to assign</div>
        <img src="./img/open.png">
    </div>
    <div class="bo_task_dropdown-content" id="boContent-assigned${i}">
        <div id="boAssigned-you${i}" onclick="BoardClickyou(event, i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">You</span>
            <div class="bo_rectangle" id="bo_rectangle${i}"></div>
        </div>
        <div id="boAssigned-contact${i}" onclick="BoardClickcontact(event, i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">Laura Numey</span>
            <div class="bo_rectangle" id="bo_rectangle${i}"></div>
        </div>
        <div onclick="BoardClickinvite(i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">Invite new contact</span>
            <img class="bo_task_img-invite" src="./img/invite-sign.png">
        </div>
    </div>`;
}

function BoardSelection(i) {
    document.getElementById('boDropdownAssigned'+ i).classList.remove("bo_task_dropdown");
    document.getElementById('boDropdownAssigned'+ i).classList.remove("bo_task_height");
    document.getElementById('boDropdownAssigned'+ i).classList.add("bo_task_height-default");
    document.getElementById('boDropdownAssigned'+ i).innerHTML = /*html*/`
    <div onclick="BoardRestartDefault()" id="boNew_assigned${i}" class="bo_task_dropdown-container">
        <div class="bo_task_assignedbox">Select contacts to assign</div>
        <img src="./img/open.png">
    </div>
    <div id="boInitials${i}">
        <img class="bo_task_initials" src="./img/contactSM.png">
        <img class="bo_task_initials" src="./img/contactEV.png">
        <img class="bo_task_initials" src="./img/contactMV.png">
    </div>
    <div class="bo_task_dropdown-content" id="boContent-assigned${i}">
        <div id="boAssigned-you${i}" onclick="BoardClickyou(event, i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">You</span>
            <div class="bo_rectangle" id="bo_rectangle${i}"></div>
        </div>
        <div id="boAssigned-contact${i}" onclick="BoardClickcontact(event, i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">Laura Numey</span>
            <div class="bo_rectangle" id="bo_rectangle${i}"></div>
        </div>
        <div onclick="BoardClickinvite(i)" class="bo_dropdown-assigned">
            <span class="bo_dropdown-item">Invite new contact</span>
            <img class="bo_task_img-invite" src="./img/invite-sign.png">
        </div>
    </div>`; 
}

function BoardRestartDefault(i) {
    document.getElementById('boDropdownAssigned'+ i).classList.add("bo_task_dropdown");
    document.getElementById('boInitials'+ i).classList.add("d-none");
    document.getElementById('boContent-assigned'+ i).classList.toggle("bo_task_show");
}