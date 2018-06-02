/* 
  Raw output test
*/

import chai from 'chai';
import {Shape, Circle, Square } from '../lib/my-webpack-library';
import * as myLib from '../lib/my-webpack-library';

const expect = chai.expect;

describe('My tests here', () => {
  describe('My subtests here', () => {
    it('Should create instances', () => {
      let sq = new Square();
      let circ = new Circle();
    });
    it('Should calc area for square',()=>
    {
      let sq = new Square();
      sq.edge = 15;
      expect(sq.area()).equal(15*15);
    })
    it('Should calc area for circle',()=>
    {
      let circ = new Circle();
      circ.radius = 10;
      expect(circ.area()).equal(Math.PI * 10*10);
    })
  });
});