const findTheOldest = function (people) {
    const aged = people.map(person => {
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        return {
            name:person.name,
            yearOfBirth:person.yearOfBirth,
            yearOfDeath:person.yearOfDeath,
            age,
        };
    })
    const oldIndex = aged.reduce((oldIndex,person,index)=>{

        if(person.age>aged[oldIndex].age){
            return index;
        }
        return oldIndex;
    },0)
    return people[oldIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
