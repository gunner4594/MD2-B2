
// Khai báo lớp Shape và tạo đối tượng
// class Shape {
//     color;
//     filled
//     constructor(color, filled) {
//         this.color = color;
//         this.filled = filled
//     }
// }
// let shape = new Shape('red',false);

// Khai báo lớp Circle và tạo đối tượng
// class Circle {
//     color;
//     radius;
//     filled
//     constructor(radius, color, filled) {
//         this.color = color;
//         this.filled = filled;
//         this.radius = radius;
//     }
//
//     getArea() {
//         return this.radius * this.radius * Math.PI;
//     }
//     getPerimeter() {
//         return 2 * this.radius * Math.PI;
//     }
// }
// let circle = new Circle(3.5, "indigo", false);
// console.log(circle);

// Khai báo lớp Rectangle và tạo đối tượng
// class Rectangle {
//     width;
//     length;
//     color;
//     filled
//     constructor(width, length, color, filled) {
//         this.color = color;
//         this.filled = filled;
//         this.width = width;
//         this.length = length;
//     }
//
//     getArea(){
//         return this.width * this.length;
//     }
//     getPerimeter(){
//         return 2 * (this.width + this.length);
//     }
// }
// let rectangle = new Rectangle(2.5, 3.8, "orange", true);
// console.log(rectangle);

// Khai báo lớp Square và khởi tạo đối tượng
class Square {
    color;
    filled;
    side
    constructor(color, filled, side= 1) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square("yellow", true, );
console.log(square);