import {Square} from './shape.square'

describe("Square module ES6 test",()=>{
    it("Should create instance",()=>{
        let instance = new Square();
        expect(instance).be.instanceof(Square);
    })
    it("Should calculate area properly",()=>{
        let instance = new Square();
        instance.edge = 25;
        expect(instance.area()).to.be.eq(625)
    })
    it("Should throw another error",()=>{
        expect(false).to.be.true;
    })
})