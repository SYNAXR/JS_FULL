let map = new Map()
map.set("nombre", "Jon")
map.set("apellido", "Mircha")
map.set("edad", 35)

console.log(map)
console.log(map.size)
console.log(map.has("mail"))
console.log(map.has("nombre"))
console.log(map.get("nombre"))
map.set("nombre", "Jonathan Mircha")
console.log(map.get("nombre"))
map.delete("apellido")

//Probando con otros tipos de datos
map.set(19, "diecinueve")
map.set(false, "falso")
map.set({}, {})
console.log(map)

for (let [key, value] of map) {
    console.log(`Key: ${key}\nValue: ${value}`)
}

const map2 = new Map([
    ["nombre", "Kenai"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
])

console.log(map2)

const keys_map2 = [...map2.keys()]
const values_map2 = [...map2.values()]

console.log(keys_map2)
console.log(values_map2)