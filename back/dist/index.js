"use strict";
var StatusT;
(function (StatusT) {
    StatusT["Active"] = "Activo";
    StatusT["Cancel"] = "Cancelado";
    StatusT["Served"] = "Atendido";
})(StatusT || (StatusT = {}));
var Type;
(function (Type) {
    Type["Dog"] = "Perro";
    Type["Cat"] = "Gato";
    Type["Other"] = "Otro";
})(Type || (Type = {}));
var StatusP;
(function (StatusP) {
    StatusP["Adoption"] = "En adopci\u00F3n";
    StatusP["Adopted"] = "Adoptado";
})(StatusP || (StatusP = {}));
const date = new Date();
console.log(date);
const fechaLocal = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
console.log(fechaLocal);
console.log(fechaLocal.getUTCHours());
console.log(fechaLocal.getUTCMinutes());
console.log(fechaLocal.getUTCSeconds());
const fechaReq = new Date(2024, 5 - 1, 2, 10 - 5, 30, 0);
console.log(fechaReq);
const pet1 = {
    type: Type.Cat,
    name: "Akira",
    age: 11,
    description: "Felino muy esquivo, color ceniza",
    status: StatusP.Adopted,
};
const user1 = {
    name: "Carlos",
    apellidos: "Tunjano",
    nickname: "caratungu",
    email: "ctunjano@mail.com",
};
const turno1 = {
    dateS: new Date(2024, 3, 29),
    dateR: new Date(2024, 4, 2, 5, 0, 0),
    hourR: new Date(2024, 4, 2, 5, 0, 0),
    status: StatusT.Active,
};
