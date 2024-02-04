const ws = new WeakSet()

let v_1 = { "Value_1": 1 }
let v_2 = { "Value_2": 2 }
let v_3 = { "Value_3": 3 }

ws.add(v_1)
ws.add(v_2)
ws.add(v_3)

/* setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    v_1 = null;
    v_2 = null;
    v_3 = null;
}, 500); */

const wm = new WeakMap()

let k1 = {}
let k2 = {}
let k3 = {}

wm.set(k1, 1)
wm.set(k2, 2)
wm.set(k3, 3)

console.log(wm)

setInterval(() => {
    console.log(wm);
}, 1000);

setTimeout(() => {
    k1 = null;
    k2 = null;
    k3 = null;
}, 500);