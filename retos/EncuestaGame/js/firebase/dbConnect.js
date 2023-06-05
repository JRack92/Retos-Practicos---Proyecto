// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
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
let _currentStageData;

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

/** Se guarda el Stage al usuario
 *
 * @param {boolean} stageComplete - Se indica si el Stage ya fue completado en su totalidad
 */
export async function SaveStage(stageComplete, currentStageID) {
  await setDoc(doc(_db, `Users/${GetCurrentUser().uid}/Stages`, currentStageID), {
    Complete: stageComplete,
  });

  // await setDoc(doc(_db, `Users/${user.uid}`, "StageV2"), {
  //   Id: _currentStageID,
  //   Complete: stageComplete,
  // });
}

/** Se guarda la pregunta del Stage actual al usuario
 * @param {string} id - id de la pregunta
 * @param {boolean} stateComplete - Se indica si la pregunta ya fue completa correctamente.
 */
export async function SaveQuestion(id, stateComplete, currentStageID) {
  await setDoc(
    doc(
      _db,
      `Users/${GetCurrentUser().uid}/Stages/${currentStageID}/listQuestions`,
      id.toString()
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
