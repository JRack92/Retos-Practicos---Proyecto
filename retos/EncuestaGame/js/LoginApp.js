import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";

import { LoadStages } from "./Stage/StageCardContainer";

const auth = getAuth();
const db = getFirestore();

let _loginAppElement = "";

let _user;
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
    console.log("Create User");

    //Crear una nueva cuenta
    createUserWithEmailAndPassword(auth, _userEmail, _userPass)
      .then((userCredential) => {
        _user = userCredential.user;
        CreateUser();
        LoadStages();
        ShowApp();
      })
      .catch((error) => {
        ConsoleLog_ErrorAuth(error);
      });
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Login");

    //Inicia sección con la cuenta indicada
    signInWithEmailAndPassword(auth, _userEmail, _userPass)
      .then((userCredential) => {
        _user = userCredential.user;
        LoadStages();
        ShowApp();
      })
      .catch((error) => {
        ConsoleLog_ErrorAuth(error);
      });
  });
}

function ConsoleLog_ErrorAuth(error) {
  console.log(error);
  console.log(`Error Code => ${error.code}`);
  console.log(`Error Message => ${error.message}`);
}

function ShowApp() {
  _loginAppElement.classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.querySelector(".StageCardContainer").classList.remove("hidden");
}

async function CreateUser() {
  await setDoc(doc(db, "Users", _user.uid), {
    Email: _user.email,
  });
}
