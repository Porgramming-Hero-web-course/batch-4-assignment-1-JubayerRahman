{
    type Circle = {
    shape : "circle",
    radius : number
}

type Rectangle = {
    shape: "rectangle",
    height: number,
    width: number
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape):number =>{

    if(shape.shape === "circle"){
        return 3.1416 * shape.radius * shape.radius
    }
    else if (shape.shape === "rectangle") {
        return shape.height * shape.width
    }
    else{
        const error = 0
        return error
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

// logs
console.log(circleArea);

console.log(rectangleArea);
}