class A{
    //1. Properties/variable
    name; // this is only decleration
    surname=''; // this is decleration and initialization
    address='Kazari khurd'; // this is decleration and initialization
    state;


    //2. Constractor
    constructor(){
        // the role of constractor is to inisialise properties
        //this.member
        this.name='kaushal';
        this.surname='kishor';
        this.fatherName='Shiv Narayan Singh';
    }


    //3. methods
    showName(){
        console.log(this.name + ' ' +this.surname + ' from ' + this.address + ' father ' + this.fatherName); // this is an internal object
    }
    setState(data){
        this.state = data;
    }
    showState(){
        console.log(this.state);
    }
}

class B extends A{
    // 1. Properties/Variable
    friends1; // This is only decleration
    friends2 = ''; // This is decleration and initialization

    // 2. constractor
    constructor(frnd3){ // frnd3 is the formal argument
        super();
        this.friends1 = 'Rakesh';
        this.friends2 = 'Dev';
        this.friends3 = frnd3;
    }

    // 3. method
    listMyFriends(){
        console.log(this.friends1);
        console.log(this.friends2);
        console.log(this.friends3);
    }
}

let obj2 = new B('Pushpendra');
obj2.listMyFriends();
obj2.showName();
obj2.setState({
    name:'Yash',
    surname:'Raj'
})

obj2.showState();

// lets create the class object
// let object = new ClassName();

let obj = new A();

// this obj is an external object
// object.member
obj.showName() // . is the member selection operator
