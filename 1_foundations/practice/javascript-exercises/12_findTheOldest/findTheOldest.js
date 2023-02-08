const findTheOldest = function(people) {
    const date = new Date();

    let oldestPerson = people.sort(function(oldest,current){
        let oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth,current.yearOfDeath);
        return oldestAge >  currentAge  ? -1 : 1;
    });

    function getAge(birth,death){
        if (!death){
            console.log("here");
            death = date.getFullYear();
        }
        return death - birth;
    }
    console.log(oldestPerson);
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
