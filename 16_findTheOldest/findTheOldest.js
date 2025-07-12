const findTheOldest = function(peoples) {
    oldest = { age : 0}

    for (let i = 0; i < peoples.length; i++) {
        if (peoples[i].yearOfDeath == undefined) {
            peoples[i].yearOfDeath = new Date().getFullYear();
        }
        age = peoples[i].yearOfDeath - peoples[i].yearOfBirth;
        if (oldest.age < age) {
            oldest.name = peoples[i].name
            oldest.age = age
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
