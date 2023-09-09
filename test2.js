class A{
    // 1. properties/variables
    name='Shiv Narayan';
    setData;
    // 2. constractor
    constructor(){
        this.address='Patna'
    }

    // 3. methods
    students(data){
        this.setData=data;
    }
    showStudents(){
        return this.setData;
    }

}
class B extends A{
    // 1. properties/variables
    surname='Singh';


    // 2. constrator
    constructor(){
        super();
    }


    // 3. methods
}

let obj1 = new A();
console.log(obj1.name);
console.log(obj1.address);

let obj2 =new B();
console.log(obj2.name);
console.log(obj2.surname);
obj2.students([
    {name:'Kaushal Kishor'},
    {name:'Amrish Puri'},
    {name:'Salman Khan'},
    {name:'Amitab Bachan'},
    {name:'Kadar Khan'}
]);
console.log(obj2.showStudents());
