// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx3w5kr631maqzI1s4jHh15DiK8Gk3_9s",
  authDomain: "encuestagame-7c759.firebaseapp.com",
  projectId: "encuestagame-7c759",
  storageBucket: "encuestagame-7c759.appspot.com",
  messagingSenderId: "843365311501",
  appId: "1:843365311501:web:01e7e875fc1b255bcd6144",
  measurementId: "G-2EDJPYRL0J",
};

// Initialize Firebase
const _app = initializeApp(firebaseConfig);
const _db = getFirestore(_app);
const _auth = getAuth(_app);
const _analytics = getAnalytics(_app);
console.log("Firestore Load");

// Colecciones
const _collectionStage = collection(_db, "Stages");

// Vars App
let _listStage;
let _userListStage;
let _currentStageData;

export function GetUserListStage() {
  return _userListStage;
}

export function GetCurrentStageData() {
  return _currentStageData;
}

/** Devuelve el usuario actual
 *
 * @returns Retorna el usuario actualmente loqueado
 */
export function GetCurrentUser() {
  return _auth.currentUser;
}

/**Retorna la instancia actual de la db */
export function GetDb() {
  return _db;
}

/** Crea un nuevo usuario con Email y Pass en Firebase
 *
 * @param {string} userEmail - Email del usuario nuevo
 * @param {string} userPass - Pass del usuario nuevo
 * @param {function} callBack - callback que se ejecuta al terminar la creación
 */
export function CreateUserWithEmailAndPassword(userEmail, userPass, callBack) {
  console.log("Create User");
  //Crear una nueva cuenta
  createUserWithEmailAndPassword(_auth, userEmail, userPass)
    .then((userCredential) => {
      const currentUser = userCredential.user;
      CreateUser(currentUser.uid, currentUser.email);
      callBack();
    })
    .catch((error) => {
      ConsoleLog_ErrorAuth(error);
    });
}

/** inicia usuario con Email y Pass de Firebase
 *
 * @param {string} userEmail - Email del usuario
 * @param {string} userPass - Pass del usuario
 * @param {function} callBack - callback que se ejecuta al terminar la carga
 */
export function SignInWithEmailAndPassword(userEmail, userPass, callBack) {
  console.log("Login");
  //Inicia sección con la cuenta indicada
  signInWithEmailAndPassword(_auth, userEmail, userPass)
    .then((userCredential) => {
      const currentUser = userCredential.user;
      // console.log(`Current User => ${currentUser.uid}`);
      // console.log(GetCurrentUser().uid);
      callBack();
    })
    .catch((error) => {
      ConsoleLog_ErrorAuth(error);
    });
}

/** Se encarga de crear el usuario en el documento Users
 *
 * @param {string} uid - uID único generado por Firebase cuando crea un nuevo usuario
 * @param {string} email - Email del usuario
 */
async function CreateUser(uid, email) {
  await setDoc(doc(_db, "Users", uid), {
    Email: email,
  });
}

/** Retorna la lista de Stages
 *
 * @param {function} callbackPrinter - Callback que recibe la lista para dibujarla
 */
export function GetListStage(callbackPrinter) {
  LoadUserListStage();

  getDocs(_collectionStage).then((res) => {
    _listStage = res.docs.map((stage) => ({
      id: stage.id,
      ...stage.data(),
    }));
    callbackPrinter(_listStage);
  });
}

/** Retorna el StageData indicado
 *
 * @param {function} callBack - Callback que recibe la Stage para dibujarla
 * @param {string} stageId - ID del Stage
 */
export function GetStageData(callBack, stageId) {
  const stageDoc = doc(_collectionStage, stageId);

  getDoc(stageDoc).then((res) => {
    _currentStageData = { id: res.id, ...res.data() };
    callBack();
  });
}

/** Retorna la lista de Stage del usuario
 *
 * @param {function} callBack - Callback que recibe la Lista de Stage del usuario
 */
export function LoadUserListStage() {
  const refDoc = query(
    collection(_db, `Users/${GetCurrentUser().uid}/Stages`),
    where(`Complete`, "==", true)
  );

  getDocs(refDoc).then((res) => {
    _userListStage = res.docs.map((stage) => ({
      id: stage.id,
      ...stage.data(),
    }));
  });
}

/** Se guarda el Stage al usuario
 *
 * @param {boolean} stageComplete - Se indica si el Stage ya fue completado en su totalidad
 * @param {string} currentStageID - ID del Stage actual
 */
export async function SaveStage(stageComplete, currentStageID) {
  await setDoc(
    doc(_db, `Users/${GetCurrentUser().uid}/Stages`, currentStageID),
    {
      Complete: stageComplete,
    }
  );
}

/** Se guarda la pregunta del Stage actual al usuario
 * @param {string} idQuestion - ID de la pregunta
 * @param {boolean} stateComplete - Se indica si la pregunta ya fue completa correctamente.
 * @param {string} currentStageID - ID del Stage Actual
 */
export async function SaveQuestion(idQuestion, stateComplete, currentStageID) {
  await setDoc(
    doc(
      _db,
      `Users/${GetCurrentUser().uid}/Stages/${currentStageID}/listQuestions`,
      idQuestion.toString()
    ),
    {
      Complete: stateComplete,
    }
  );
}

function ConsoleLog_ErrorAuth(error) {
  console.log(error);
  console.log(`Error Code => ${error.code}`);
  console.log(`Error Message => ${error.message}`);
}
