const i = [1, 2, 3, "True"]
//Accedemos al iterador del iterable
const it = i[Symbol.iterator]()

console.log(i)
console.log(it)
/* console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */

let next = it.next()

while (!next.done) {
    console.log(next.value);
    next = it.next();
}