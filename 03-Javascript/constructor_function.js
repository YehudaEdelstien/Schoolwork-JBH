function Person(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}

function Student(className, college, year) {
    this.className = className;
    this.college = college;
    this.year = year;
}

Student.prototype = new Person("MyName", "age", "id");

Student.prototype.hi = function() {
    console.log(`class => ${this.className}; college => ${this.college}; year => ${this.year}`);
}

const students = []
students.push(new Student("a", "JBH", 2000));
students.push(new Student("a", "JBH", 2000));
students.push(new Student("b", "JBH", 2000));
students.push(new Student("b", "JBH", 2000));
students.push(new Student("a", "JBH", 2002));

students.forEach(student => {
    student.hi();
});

console.log(Student.prototype.hi())