import {
  CreateUserWithEmailAndPassword,
  SignInWithEmailAndPassword,
} from "./firebase/dbConnect";

import { LoadStages } from "./Stage/StageCardContainer";

let _loginAppElement = "";

let _userEmail;
let _userPass;

print_LoginApp();

function print_LoginApp() {
  _loginAppElement = document.getElementById("LoginApp");
  const innerHtml = `
    <div class="Login">
        <form id="loginForm">
            <div>
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required>
            </div>
            
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>

            <div class="ButtonsContainer">
                <button type="submit" id="loginButton">Iniciar Sesión</button>
                <button type="button" id="createUser">Crear Cuenta</button>
            </div>
        </form>
    </div>
    `;
  _loginAppElement.innerHTML = innerHtml;

  const formElement = document.getElementById("loginForm");
  const createUserElement = document.getElementById("createUser");
  const userEmailElement = document.getElementById("userEmail");
  const userPasswordElement = document.getElementById("password");

  userEmailElement.addEventListener("input", (event) => {
    _userEmail = event.target.value;
  });

  userPasswordElement.addEventListener("input", (event) => {
    _userPass = event.target.value;
  });

  createUserElement.addEventListener("click", () => {
    CreateUserWithEmailAndPassword(_userEmail, _userPass, CallBackLogin);
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    SignInWithEmailAndPassword(_userEmail, _userPass, CallBackLogin);
  });
}

/**
 * Métodos llamados cuando se hace Login del usuario
 */
function CallBackLogin() {
  LoadStages();
  ShowApp();
}

function ShowApp() {
  _loginAppElement.classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.querySelector(".StageCardContainer").classList.remove("hidden");
}
