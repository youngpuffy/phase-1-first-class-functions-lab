// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}
 returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

 const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier
    }
 }
 function fareDoubler(fare){
    return fare * 2
 }
 function fareTripler(fare){
    return fare * 3
 }
 const selectDifferentDrivers = function(drivers, callback){
    return callback(drivers)
 }