import {add} from './calculate'
import {expect} from 'chai'
//Hallo world

describe("calculate tests",()=>{

    it("should work",()=>{
        let res = add(1,2);
        expect(res).to.be.eq(3)
        ;
    });


    it("should throw error",()=>{
        throw new Error("Error is thrown")//
    });

    it("should throw error 2",()=>{
        throw new Error("Error is thrown")//
    });
    
    it("should throw error 3",()=>{
        throw new Error("Error is thrown")//
    });

})
