let fs = require('fs');
const Contact = require("./models/Contact");

let phonebook = JSON.parse(fs.readFileSync('./data.json'));
function getData() {
	return phonebook;
}

function addContact(name, number) {
	let contacts = { name, number };
	phonebook.push(contacts);
	fs.writeFileSync('./data.json', JSON.stringify(phonebook));
}

module.exports = {
	getData,
	addContact
}