function toggler() {
    var obj = arguments;
    var index = -1;
    return function () {
        index += 1;
        return obj[index % obj.length];
    }
}

const toggle = toggler(1, 2, 3);

console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());