async function NavRenderSummary() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/summary.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    summaryPicked(); 
}


async function NavRenderBoard() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/board.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    updateHTML();
    boardPicked();
}


async function NavRenderAddTask() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/add_task.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    addTaskPicked();
}


async function NavRenderContacts() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/contacts.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    contactsPicked();
    await initContacts();
}


async function NavRenderPrivacy() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/privacy.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    privacyPicked();
}


async function NavRenderImprint() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/imprint.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
    imprintPicked();
}


async function NavRenderHelp() {
    document.getElementById('includeHTML').innerHTML = `
    <div w3-include-html="./content/help.html" onclick="closeLogout()"></div>
    `;
    await includeHTML();
}


    function summaryPicked() {
        document.getElementById('nav_summary').innerHTML = `
        <div class="nav_btn_picked" onclick="renderSummary()">
        <img src="../img/summary.png"><a>Summary</a></div>
        `;
    }


    function boardPicked() {
        document.getElementById('nav_board').innerHTML = `
        <div class="nav_btn_picked" onclick="renderBoard()">
        <img src="../img/board.png"><a>Board</a></div>
        `;
    }


    function addTaskPicked() {
        document.getElementById('nav_add_task').innerHTML = `
        <div class="nav_btn_picked" onclick="renderAddTask()">
        <img src="../img/add_task.png"><a>Add Task</a></div>
        `;
    }


    function contactsPicked() {
        document.getElementById('nav_contacts').innerHTML = `
        <div class="nav_btn_picked" onclick="renderContacts()">
        <img src="../img/contacts.png"><a>Contacts</a></div>
        `;
    }


    function privacyPicked() {
        document.getElementById('nav_privacy').innerHTML = `
        <div class="nav_btn_picked" onclick="NavRenderprivacy()">
        <img src="../img/info.png"><a>Privacy</a></div> 
        `;
    }


    function imprintPicked() {
        document.getElementById('nav_imprint').innerHTML = `
        <div class="nav_btn_picked" onclick="NavRenderimprint()">
        <img src="../img/info.png"><a>Imprint</a></div> 
        `;
    }