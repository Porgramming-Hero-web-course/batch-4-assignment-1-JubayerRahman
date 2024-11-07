{
    function validateKeys<t extends object>(obj:t, keys:(keyof t)[]): boolean{
        return keys.every(key=> key in obj)
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
}