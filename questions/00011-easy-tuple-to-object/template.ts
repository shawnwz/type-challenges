type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P;
};

const arr = ['tesla', 'model 3', 'model X', 'model Y'] as const

type t = TupleToObject<typeof arr>



//js 

// function tupleToObject (array) {
//     const obj = {};
//     array.forEach((val)=>{
//         obj[val] = val;
//     })
//     return obj;
// }