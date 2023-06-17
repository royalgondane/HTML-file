var person={
    firstName:'royal',
    lastName:'gondane',

    get getFullName(){
        return this.firstName+" "+this.lastName;
    },

    set setFullName(para){
        this.firstName=para.fn.toUpperCase();
        this.lastName=para.ln.toUpperCase();
    }
};

person.setFullName={fn:"agastya", ln:"bagade"};

console.log(person.getFullName);