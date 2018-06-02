import {Shape} from './shape'

export class Square extends Shape
{
    edge = 10
    name="Square"
    area(){
        return this.edge * this.edge;
    }
}