type MyExclude<T, U> = T extends U ? never : T


type a = 'a' | 'b' | 'c' | 'd'
type b = 'c'
type c = 'e' | 'f'
type d = 'g'
type z = MyExclude<c, d>

let test : a
test = 'b'