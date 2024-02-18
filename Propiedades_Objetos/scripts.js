let random = Math.round(Math.random() * 100 + 5)
const obj_users = {
    property: "Valor",
    [`id_${random}`]: "Random Value"
};
//console.log(obj_users)

const users = ["John", "Irma", "Miguel", "Kala", "Kenai"]

users.forEach((user, index) => obj_users[`id_${index}`] = user)
console.log(obj_users)