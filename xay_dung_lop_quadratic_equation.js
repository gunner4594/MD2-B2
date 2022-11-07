
class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c
    }
    getDiscriminant () {
        let delta = this.b ** 2 - 4 * this.a * this.c;
        return delta
    };
    getRoot1() {
        let x1 = (-this.b + Math.pow(this.getDiscriminant(), 0.5))/ 2 * this.a
        return x1
    }
    getRoot2() {
        let x2 = (-this.b - Math.pow(this.getDiscriminant(), 0.5)) / 2 * this.a
        return x2
    }
    calculate() {
        if (this.getDiscriminant() < 0 ) {
            console.log('PT vo nghiem')
        } else if (this.getDiscriminant() == 0 ) {
            console.log('PT có nghiệm kép x1 = x2 =: ' + this.getRoot1())
        } else {
            console.log('PT có 2 nghiệm : ' + ' x1 = ' + this.getRoot1() + ' ,x2 = ' + this.getRoot2())
        }
    }
}
let test1 = new QuadraticEquation(5,8,2);
test1.calculate()
