function init() {
    login();
    logoAnimation();
}

function logoAnimation() {
    document.getElementById('animation').innerHTML = /*html*/`
        <img src="./img/logo_dark.png" class="login_logo_animation">
    `;
}


function login() {
    document.getElementById('login').innerHTML = /*html*/`
    <div class="login_frame">
        <div class="login_access">
            <span>Log in</span><br>
            <div class="login_blue_line"></div><br><br>
            <div class="login_pos_rel">
                <input placeholder="Email" id="email" type="email" class="login_input">
                <img src="./img/mail.png" class="login_mail_png">
                <br><br>
                <input placeholder="Password" id="password" type="password" class="login_input">
                <img src="./img/secure.png" class="login_secure_png">
                <br>
            </div>
            <div class="login_forgot">
                <input type="checkbox" class="login_checkbox">
                <span>Remember me</span>
                <a href="#">Forgot my Password</a>
                <br><br><br>
            </div>
            <br>
            <div class="login_btns_dflex">
                <button class="btn_dark" onclick="hideLogin()">Log in</button>
                <button class="btn_bright" onclick="hideLogin()">Guest Log in</button>
            </div>
        </div> 
        <div class="login_join">
            <a>Not a join user?</a><button class="login_btn_join">Sign up</button>
        </div>       
    </div> 
    `;
}


function hideLogin() {
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('animation').style.visibility = "hidden";
    NavRenderSummary();
}