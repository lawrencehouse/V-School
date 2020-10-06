employees = []

// Constructor for Employee

function Employee(Name, JobTitle, Salary, Status) {
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = 'Full Time'
} 

Employee.prototype.printEmployeeForm = function() {
    console.log(this.Name)
    console.log(this.JobTitle)
    console.log(this.Salary)
    console.log(this.Status)
}

// Instatiated employees

Sintificus = new Employee("Sintificus", "Wizard", "$10/hour")

Bina = new Employee('Bina', 'overseer', '$20/hour')

Jiub = new Employee('Jiub', 'Nerevarine', '₪100/hour')

Jiub.Status = 'Contract'

// Method for calling employee data

Sintificus.printEmployeeForm()

Bina.printEmployeeForm()

Jiub.printEmployeeForm()

// Employee data pushed to employees array

employees.push(Sintificus)

employees.push(Bina)

employees.push(Jiub)

console.log(employees)