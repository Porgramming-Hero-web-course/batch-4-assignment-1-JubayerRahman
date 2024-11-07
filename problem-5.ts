{
    function getProperty<ObjectType, k extends keyof ObjectType>(obj:ObjectType, key:k):ObjectType[k]{
    return obj[key]
}

const person = { name: "Ohee", age: 120 };
console.log(getProperty(person, "age"));
}