import {Shape} from './shape'

export class Square extends Shape
{
    edge = 10
    name="Square"
    area(){
        let c1 = new SquareInternalClass();
        if(squareInternalFunction()=="123") throw "123";
        return this.edge * this.edge;
    }
}

class SquareInternalClass
{
}

function squareInternalFunction()
{
    return "hallo world!"
}