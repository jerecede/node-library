import { question } from 'readline-sync';
import Library from './model/library.js';
import User from './model/user.js';
import { Book, EBook, PhysicalBook } from './model/book.js';

const library = new Library('Hugo & Jere Library');

console.log(`\nbenevenuto in ${library.name}`);

while (true) {
    const introString = "\nMENU\nfunzionalita':\n" +
        "1) aggiungi utente\n" +
        "2) aggiungi libro\n" +
        "3) lista utenti\n" +
        "4) lista libri\n" +
        "5) esci\n" +
        "\ninserisci numero della funzionalita' da eseguire\n>>>";

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
            console.log('\nSCELTA NON VALIDA');
            const a = question("");
            break;
    }
}

function addUser() {
    const nameString = "inserisci nome del nuovo utente:\n>>>";
    const answerName = question(nameString);
    const id = crypto.randomUUID();
    const user = new User(id, answerName);
    library.addUser(user)
}

function addBook() {
    const isbn = crypto.randomUUID();
    const titleString = "inserisci titolo libro\n>>>";
    const answerTitle = question(titleString);
    const authorString = "inserisci autore libro\n>>>";
    const answerAuthor = question(authorString);

    const typeBookString = "che tipo di libro e'? elettronico [e] fisico [f]\n>>>";
    const answerTypeBook = question(typeBookString);

    switch (answerTypeBook) {
        case 'e':
            let fileFormat = '';
            const fileformatString = "che formato vuoi? pdf [1] epub [2] mobi [3]\n>>>";
            const answerFileformat = question(fileformatString);
            if (answerFileformat === '1') {
                fileFormat = 'pdf';
            } else if (answerFileformat === '2') {
                fileFormat = 'epub'
            } else if (answerFileformat === '3') {
                fileFormat = 'mobi'
            } else {
                console.log('\nSCELTA NON VALIDA');
                const a = question("");
                break;
            }
            const ebook = new EBook(isbn, answerTitle, answerAuthor, fileFormat);
            library.addBook(ebook);
            break;
            
        case 'f':
            const shelfLocation = Math.round((Math.random * 9) + 1);
            const pbook = new PhysicalBook(isbn, answerTitle, answerAuthor, shelfLocation);
            library.addBook(pbook);
            break;

        default:
            console.log('\nSCELTA NON VALIDA\n');
            const a = question("");
            break;
    }
}

function listUsers() {
    console.log("\nLISTA UTENTI")
    library.listUsers();
    const a = question("");
}

function listBooks() {
    console.log("\nLISTA LIBRI")
    library.listBooks();
    const a = question("");
}