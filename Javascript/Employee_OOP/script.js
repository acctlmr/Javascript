class Employee{
    constructor(name, salary, tax) {
        this.name = name;
        this.salary = salary;
        this.tax = tax;
    }

    calculateSalary() {
        this.netSalary = Math.round(this.salary - ((this.tax / 100) * this.salary));
        return this.netSalary;
    }

    generateID() {
        
        this.id = Math.floor(Math.random() * 100000);
        return this.id;
    }
}

class EmployeeUI{

    addEmployee(employee)
    {
        const employeeList = document.querySelector('tbody');
        
        const markup = `
        <tr>
        <th scope="row">${employee.id}</th>
        <th>${employee.name}</th>
        <th>${employee.salary}</th>
        <th>${employee.tax}%</th>
        <th>${employee.netSalary}</th>
        <th><a href="#" class="btn btn-danger delete">Delete</a></th>
        </tr>        
        `;

        //afterbegin - just inside the element before its first child.
        employeeList.insertAdjacentHTML('afterbegin', markup);
    }

    clearFields() {
        
        document.querySelector('#nameField').value = '';
        document.querySelector('#salaryField').value = '';
        document.querySelector('#taxField').value = '';

    }

    alertMessage(messageType, message)
    {
     
        const markup = `
        <div class="text-center alert alert-${messageType}" role="alert">
        ${message}</div>`;

        //beforebegin - Before the element, only valid if the element is in the DOM tree and it has a parent element.
        const form = document.querySelector('form');
        form.insertAdjacentHTML('beforebegin', markup);

        setTimeout(() => {
            document.querySelector('.alert').remove();                  
        }, 2000);
        
    }

    deleteEmployee(target) {

       // console.log(target.parentElement.parentElement);
        if (target.matches('.delete')) {
            target.parentElement.parentElement.remove();
            return true;
            
        }
    }

}

class StoreEmployee{

    //By using className we can access methods present inside the class without creating any object if we are using static.
    static getEmployees() {        
        let employees;

        if (localStorage.getItem('employees') === null) {
            employees = [];
        } else {
            employees=JSON.parse(localStorage.getItem('employees'));
        }

        return employees;

    }

    static displayEmployees() {

        const employees = StoreEmployee.getEmployees();
        
        const employee_ui = new EmployeeUI();

        employees.forEach(employee => {
            employee_ui.addEmployee(employee); 
        });


    }

    static addEmployee(employee) {
        
        const employees = StoreEmployee.getEmployees();
        employees.push(employee);

        localStorage.setItem('employees', JSON.stringify(employees));
    }

    static removeEmployee(id)
    {
        const employees = StoreEmployee.getEmployees();

        employees.forEach((employee, index) => {
           
            if (employee.id === parseInt(id)) {
                employees.splice(index, 1);
            }

        });
        localStorage.setItem('employees',JSON.stringify(employees));
    }

}


const addEmployeeButton = document.querySelector('#add_employee');

addEmployeeButton.addEventListener('click', e => {
   
    const name = document.querySelector('#nameField').value;
    const salary = document.querySelector('#salaryField').value;
    const tax = document.querySelector('#taxField').value;
    
    const employee_ui = new EmployeeUI();

    if (name === '' || salary === '' || tax === '')
    {
        employee_ui.alertMessage('danger', 'Please complete the form.');

    } else {
        
        const employee = new Employee(name, salary, tax);

        employee.id = employee.generateID();
        employee.netSalary = employee.calculateSalary();

        employee_ui.addEmployee(employee);

        StoreEmployee.addEmployee(employee);

        employee_ui.alertMessage('success', 'Employee is added successfully');

        employee_ui.clearFields();
    }

});


document.querySelector('tbody').addEventListener('click', e => {
   
    const employee_ui = new EmployeeUI();
    
    //console.log('Employee');

    const isDeleted = employee_ui.deleteEmployee(e.target);

    //console.log(e.target.parentElement.parentElement.firstElementChild.textContent)
    
    let e_id = e.target.parentElement.parentElement.firstElementChild.textContent;
    StoreEmployee.removeEmployee(e_id);
    
    if (isDeleted)
    {
        employee_ui.alertMessage('success', 'Employee deleted successfully');
    }





});

document.querySelector('form').addEventListener('submit', e => {
   
    e.preventDefault();
    
});

StoreEmployee.displayEmployees();