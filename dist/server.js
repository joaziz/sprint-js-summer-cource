"use strict";
var appendFile = require("fs").promises.appendFile;
var UserName = process.argv[2];
var Age = isNaN(parseInt(process.argv[3] || "0")) ? 0 : parseInt(process.argv[3] || "0");
var accountNO = parseInt(process.argv[4] || "0");
var isAdult = function (age) {
    return age > 18;
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Ahmed = new Person('ahmed');
var Adel = new Person('Adel');
console.log("MR. " + Ahmed.name);
console.log("MR. " + Adel.name);
function getUsers() {
    return [
        { name: "ahmed", age: 22, gender: 'female' },
        { name: "adel", age: 22, gender: 'female' },
        { name: "sameh", age: 22, gender: 'female' }
    ];
}
var genders = getUsers().map(function (u) { return u.name; });
console.log(genders);
var v;
v = 20;
console.log(v);
