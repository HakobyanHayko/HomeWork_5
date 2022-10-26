class Name{
    constructor(firstName , lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    initials(){
        return `${this.firstName[0]}. ${this.lastName[0]}`
    }

}

const harry = new Name("Harry" , "Potter") 
console.log(harry.fullName())
console.log(harry.initials())
