//type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

import { Equal } from "@type-challenges/utils"

type Includes<T extends readonly any[], U> = T extends [infer F, ... infer R]
    ? Equal<U, F> extends true
    ? true
    : Includes<R, U> : false;

export default Includes;