class admin{
    constructor(name){
        this.name=name;
        this.salary=o;
        this.leave='none'
    }
   
    adminSalary(amount){
        this.salary+=amount;
        console.log(this.salary);
    }

     acceptManagerLeave(){
        this.leave='accepted';
         console.log("Manager leave have been accepted");
     }
     

     rejectManagerLeave(){
        this.leave='rejected';
        console.log("Manager leave have been rejected");
     
     }
}

class Manager {
    constructor(name){
       super(name);
       this.salary = 0; 
       this.department = department; 
   }

   acceptEmployeeLeave() {
       this.leave= 'accepted';
       console.log("Employee leave request has been accepted.");
   }

   rejectEmployeeLeave() {
       this.leave = 'rejected';
       console.log("Employee leave request has been rejected.");
   }

   getManagerSalary(amount) {
       this.salary += amount;
       console.log("Manager Salary:", this.salary);
   }
}

class Employee{
   constructor(name) {
       super(name); 
       this.salary = 0; 
   }

   requestLeave() {
       console.log(`${this.name} has requested leave.`);
   }

   getSalary(amount) {
       this.salary += amount;
       console.log("Employee Salary:", this.salary);
   }
}

let a = new admin('admin');
a.adminSalary(20000);
a.rejectManagerLeave();

let m = new Manager('manager', 'Sales');
m.acceptEmployeeLeave();
m.getManagerSalary(14000); 

let e = new Employee('employee');
e.getSalary(6000);
e.requestLeave();
    