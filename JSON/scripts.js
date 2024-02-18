const json = {
    string: "Jon",
    number: 35,
    boolean: true,
    array: ["run", "programing", "cook"],
    object: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    null: null
}

console.log(json)
console.log(JSON)

console.log(JSON.parse("{}"))
console.log(JSON.parse("[1, 2, 3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("19"))
console.log(JSON.parse("null"))

console.log(JSON.stringify(null))
console.log(JSON.stringify(19))
console.log(JSON.stringify(true))
console.log(JSON.stringify([1, 2, 3]))
console.log(JSON.stringify({}))
console.log(JSON.stringify({ x: 2, y: 5 }));

console.log(JSON.stringify(json))
console.log(JSON.parse('{"string": "Jon","number": 35,"boolean": true,"array": ["run", "programing", "cook"],"object": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"null": null}'))
