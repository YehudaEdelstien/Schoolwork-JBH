//2)
function Person(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}

//3)
const alf = new Person("Alf", 52, "0001");
const geo = new Person("Geo", 52, "0002");

//4)
alf.print = function(){console.log(this.name)};
// alf.print(); //Alf

//5)
Person.prototype.print = function(){console.log(this.id)};

//6)
// alf.print(); //Alf
// geo.print(); //0002

//7)
delete alf.print;

//8)
// alf.print(); //0001
// geo.print(); //0002


//PART 2

//2)
function Student(name, age, id, course, grades) {
    Person.apply(this, arguments);
    this.course = course;
    this.grades = grades;
}

//3)
const sal = new Student("Sal", 19, "5001", "CS100", [80, 100, 95]);
const burt = new Student("Burt", 22, "5002", "English", [85, 90, 90, 65, 85]);

//4)
// sal.print(); //ERROR, not a function

//5)
Object.setPrototypeOf(Student.prototype, Person.prototype);

//6)
// sal.print(); //5001

//7)
const fred = new Student("Fred", 21, "5003", "CS100", [90, 90, 90, 85, 100]);
const carl = new Student("Carl", 22, "5004", "Infi", [30, 45, 60, 65, 55]);
const chad = new Student("Chad", 20, "5005", "CS100", [85, 90, 90, 65, 85]);

const students = [sal, burt, fred, carl, chad];

//8)
function studentsBest(studentsArr = []) {
    studentsArr.forEach(stdnt => {
        console.log(stdnt.name, stdnt.course, Math.max(...stdnt.grades));
    })
}
// studentsBest(students);

//9)
Person.prototype.printPerson = function printPerson() {
    console.log(this.name, this.age, this.id);
}
// chad.printPerson();

//10)
Student.prototype.printStudent = function printStudent() {
    this.printPerson();
    console.log(this.course, this.grades);
}
// chad.printStudent();

//11)
Student.prototype.average = function average() {
    console.log(this.grades.reduce((a, b) => (a + b)) / this.grades.length);
}
// chad.average();