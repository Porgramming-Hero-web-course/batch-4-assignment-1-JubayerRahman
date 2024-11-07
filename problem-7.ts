{
    class Car {
        constructor( public name:string, public model:string, public year:number  ){}

        getCarAge(): number {
            const nowYear = new Date().getFullYear()
            return nowYear - this.year
        }
}

const car = new Car("Honda", "Civic", 1905);
console.log(car.getCarAge());


}