import _ from 'lodash'  //importing Js node_module's module from Typescript with synthetic default import
import * as tsutils from './calc-ts-util'//importing Typescript module from Typescript
import * as jsutils from './calc-js-util'//importing Javascript module from Typescript

export function add(a,b)
{
    return tsutils.add(a,b);
}

export function mult(a,b)
{
    return jsutils.mult(a,b);
}


export function div(a,b)
{
    let divide = _.divide;
    let res = divide(a,b);
    return res;
}