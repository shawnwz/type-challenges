type Concat<T extends readonly any[], U extends readonly any[]> = [
    ...T, ...U
]
    



type res = Concat<['1', 2, '3'], [false, boolean, '4']>;
