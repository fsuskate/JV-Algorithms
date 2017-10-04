/*
Francis     1970-2017
John        1945-1992
Becky       1984-2014
Jake        1970-2017
Blake       1955-2000
Sharon      1974-2014
Tom         1971-2017
Conrad      1935-2001
Kim         1983-1999
Greg        1961-2017
Zander      1927-2001
Gwen        1985-2015
Timmy       1994-2017
*/

var people = [
    {name: "Francis",   birth: 1970, death: 2017},
    {name: "John",      birth: 1945, death: 1992},
    {name: "Becky",     birth: 1984, death: 2014},
    {name: "Jake",      birth: 1955, death: 2000},
    {name: "Blake",     birth: 1974, death: 1999},
    {name: "Sharon",    birth: 1971, death: 2001},
    {name: "Tom",       birth: 1935, death: 1994},
    {name: "Conrad",    birth: 1983, death: 2011},
    {name: "Kim",       birth: 1961, death: 2010},
    {name: "Greg",      birth: 1927, death: 2004},
    {name: "Timmy",     birth: 1994, death: 2017},
];

var birthYears = [];
var deathYears = [];

people.forEach(function (person) {
    birthYears.push(person.birth);
    deathYears.push(person.death);
});

birthYears.sort();
deathYears.sort();

var earliestYear = birthYears[0];
var latestYear = deathYears[deathYears.length-1];

var yearHashSet = [];

for (var currentYear = earliestYear; currentYear < latestYear; currentYear++) {
    var howManyPeopleAlive = 0;
    for (var i = 0; i < people.length; i++) {
        if (currentYear >= people[i].birth && currentYear <= people[i].death) {
            howManyPeopleAlive++;
        }
    }
    yearHashSet[howManyPeopleAlive] = currentYear;
    console.log("Checking year: " + currentYear + " People alive: " + howManyPeopleAlive);
}

console.log(yearHashSet);


