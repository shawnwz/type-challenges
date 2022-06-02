interface MyType {field?: string}
interface UnionLeft {foo?: string}
interface UnionRight {bar?: string}


type BodyType = MyType & (UnionLeft | UnionRight)


let res:BodyType = {}

