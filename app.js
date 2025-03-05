import { question } from 'readline-sync';
import Library from './model/library.js';
import User from './model/user.js';

const library = new Library('Hugo & Jere Library');

console.log(`benevenuto in ${library.name}\n\n`);

while (true) {
    const introString = "ecco le funzionalita':\n" +
        "1) aggiungi utente\n" +
        "2) aggiungi libro\n" +
        "3) lista utenti\n" +
        "4) aggiungi libri\n" +
        "5) esci\n" +
        "inserisci il numero della funzionalita' desiderata\n";

    const answer = question(introString);

    switch (answer) {
        case '1':
            addUser();
            break;
        case '2':
            addBook();
            break;
        case '3':
            listUsers();
            break;
        case '4':
            listBooks();
            break;
        case '5':
            process.exit(0);
            break;

        default:
            console.log('scelta non valida');
            break;
    }

    console.log('ecco la risposta ' + answer);
}

function addUser() {
    const addUserName = "inserisci nome:\n";
    const name = question(addUserName);
    const id = crypto.randomUUID();
    const user = new User(id, name);
    library.addUser(user)
    library.listUsers();
}

function addBook() {
    const bookType = "che tipo di libro vuoi inserire? [e] elettronico [f] fisico\n";
    switch (bookType) {
        case 'e':

            break;
        case 'f':

            break;

        default:
            break;
    }
    const name = question(addUserName);
    const id = crypto.randomUUID();
    const user = new User(id, name);
    library.addUser(user)
    library.listUsers();
}

function listUsers() {

}

function listBooks() {

}