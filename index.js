// // Your code here
// let createEmployeeRecord = function(row){
//     return {
//         firstName: row[0],
//         familyName: row[1],
//         title: row[2],
//         payPerHour: row[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
// }

// let createEmployeeRecords = function(employeeRowData) {
//     return employeeRowData.map(function(row){
//         return createEmployeeRecord(row)
//     })
// }

// let createTimeInEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     employee.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

// let createTimeOutEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     employee.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

// let hoursWorkedOnDate = function(employee, soughtDate){
//     let inEvent = employee.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     let outEvent = employee.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     return (outEvent.hour - inEvent.hour) / 100
// }

// let wagesEarnedOnDate = function(employee, dateSought){
//     let rawWage = hoursWorkedOnDate(employee, dateSought)
//         * employee.payPerHour
//     return parseFloat(rawWage.toString())
// }

// let allWagesFor = function(employee){
//     let eligibleDates = employee.timeInEvents.map(function(e){
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate(employee, d)
//     }, 0)

//     return payable
// }

// let findEmployeeByFirstName = function(srcArray, firstName) {
//   return srcArray.find(function(rec){
//     return rec.firstName === firstName
//   })
// }

// let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor(rec)
//     }, 0)
// }
 // Function to create an employee record
const createEmployeeRecord = row => ({
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: []
});

// Function to create employee records from data
const createEmployeeRecords = employeeRowData => employeeRowData.map(createEmployeeRecord);

// Function to record time in
const createTimeInEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(' ');
    employee.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour, 10), date });
    return employee;
};

// Function to record time out
const createTimeOutEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour, 10), date });
    return employee;
};

// Function to calculate hours worked on a date
const hoursWorkedOnDate = (employee, soughtDate) => {
    const inEvent = employee.timeInEvents.find(e => e.date === soughtDate);
    const outEvent = employee.timeOutEvents.find(e => e.date === soughtDate);
    return (outEvent.hour - inEvent.hour) / 100;
};

// Function to calculate wages earned on a date
const wagesEarnedOnDate = (employee, dateSought) =>
    parseFloat((hoursWorkedOnDate(employee, dateSought) * employee.payPerHour).toString());

// Function to calculate total wages for an employee
const allWagesFor = employee =>
    employee.timeInEvents.reduce((memo, e) => memo + wagesEarnedOnDate(employee, e.date), 0);

// Function to find an employee by first name
const findEmployeeByFirstName = (srcArray, firstName) =>
    srcArray.find(rec => rec.firstName === firstName);

// Function to calculate total payroll
const calculatePayroll = arrayOfEmployeeRecords =>
    arrayOfEmployeeRecords.reduce((memo, rec) => memo + allWagesFor(rec), 0);
