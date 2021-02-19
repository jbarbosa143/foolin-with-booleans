/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num){
  num = num >5;
return num;
}
test1 = moreThan5(10);
test1;

function isNewTopScore(score, highScore){
  newHigh = score > highScore;
  return newHigh;
}

test1 = isNewTopScore(100 , 150);
test1;
test2 = isNewTopScore(150,100);
test2;

function isInDanger(grade){
  grade = grade >= 60 && grade <=71;
  return grade;
}
result1 = isInDanger(69);
result1;
result2 = isInDanger(75);
result2;

function isCoasting(grade){
grade= grade >= 72 && grade <= 83;
return grade;
}
result1 = isCoasting(75);
result1;
result2 = isCoasting(85);
result2;

function isSucceeding(grade){
  grade = grade >= 84 && grade <= 92;
  return grade;
}

result1 = isSucceeding(85);
result1;
result2 = isSucceeding(93);
result2;

function isFailing(grade){
  grade = grade < 60;
  return grade;
}

result1 = isFailing(59);
result1;
result2 = isFailing(61);
result2;

function isAcing(grade){
grade = grade > 92;
return grade;
}
result1 = isAcing(95);
result1;
result2 = isAcing(91);
result2;

function isStudent(string){
  string = string ==="student";
  return string;
}
result1 = isStudent("Jeremy");
result1;
result2 = isStudent("student");
result2;

function isTeacher(string){
  string = string ==="teacher";
  return string;
}
result1 = isTeacher("teacher");
result1;
result2 = isTeacher("Colin");
result2;

function isAdmin(string){
  string = string === "admin";
  return string;
}
result1 = isAdmin("admin");
result1;
result2 = isAdmin("Jesus");
result2;

function isElementary(string){
  school = string === "elementry";
  return school;
}
result1 = isElementary("Sam Houston");
result1;
result2 = isElementary("elementry");
result2;

function areDifferentPeople(string1, string2){
  pep = string1 === string2;
  return pep;
}
result1 = areDifferentPeople("jeremy","lee");
result1;
result2 = areDifferentPeople("jeremy","jeremy");
result2;

function isMiddleSchoolTeacher(role,level){
mst = role === "teacher" && level >= 6 && level <=8;
return mst;
}
result1 = isMiddleSchoolTeacher("teacher",7);
result1;

function notAnElementarySchoolAdministrator(str1 ,str2){
  return str1 !== "elementry" || str2 !== "admin";
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
