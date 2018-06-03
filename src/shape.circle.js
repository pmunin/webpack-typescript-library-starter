import {Shape} from './shape'

export class Circle extends Shape{
    radius=10;
    name="Circle"
    area()
    {
        return Math.pow(this.radius,2)*Math.PI
    }
}