interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "New York",
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Ode",
    age: 20,
    location: "Paris",
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table')
studentsList.forEach(element => {
    const tr = table.insertRow();
    tr.insertCell().innerText = element.firstName
    tr.insertCell().innerText = element.location
});
document.body.appendChild(table)