/**
 * fun
 * functional JavaScript
 * @license MIT
 */

var fun = exports

/**
 * sel(i)(list)
 * select n-th element from list
 * 
 * @example 
 *   sel(2)([0,1,2,3]); //2
 */

fun.sel = i => list => list[i]

/**
 * s0(list)
 * select 0-th element from list
 */

fun.s0 = fun.sel(0)

/**
 * s1(list)
 * select the 1st element from list
 */

fun.s1 = fun.sel(1)

/**
 * s2(list)
 * select the 2nd element from list
 */

fun.s2 = fun.sel(2)

/**
 * s3(list)
 * select the 3rd element from list
 */

fun.s3 = fun.sel(3)

/**
 * s4(list)
 * select the 4th element from list
 */

fun.s4 = fun.sel(4)

/**
 * s5(list)
 * select the 5-th element from list
 */

fun.s5 = fun.sel(5)

/**
 * s6(list)
 * select the 6th element from list
 */

fun.s6 = fun.sel(6)

/**
 * s7(list)
 * select 7th element from list
 */

fun.s7 = fun.sel(7)

/**
 * s8(list)
 * select 8th element from list
 */

fun.s8 = fun.sel(8)

/**
 * s9(list)
 * select 9th element from list
 */

fun.s9 = fun.sel(9)

/**
 * apply([f,x]) 
 * apply `f` to `x`.
 * 
 * @example 
 *   apply([x => x*x, 3]); //9
 */

fun.apply = [f,x] => f(x)

/**
 * aa(f)(list)
 * apply `f` to each element of `list`
 * 
 * @example 
 *   aa(x => 2*x)([1,2,3]); //[2,4,6]
 */

fun.aa = f => array => [f(x) for x in array]

/**
 * comp2([f,g])(x)
 * return the composition f(g(x))
 * 
 * @example
 *   comp2([x => 2*x, y => y-1])(5); //8
 */

fun.comp2 = [f,g] => x => f(g(x))

/**
 * comp([f,g,h,...])(x)
 * returns the composition f(g(h(...(x))))
 * 
 * @example
 *   comp([x => x+1, y => 2*y, z => z-1])(5) //3
 */

fun.comp = functions => fun.insl((f, g) => x => f(g(x)))(functions)

/**
 * cons([f,g,h,...])(x)
 * returns the applications [f(x), g(x), h(x), ...]
 *
 * @example
 *   cons([x => x-1, y => 2*y, z => z%3])(5); //[4,10,2]
 */

fun.cons = functions => x => fns.map(f => f(x))

/**
 * id(x)
 * return the given value
 */

fun.id = x => x

/**
 * k(x)(y)
 * return a function that return the given value
 */

fun.k = x => y => x

/**
 * distl([x,list])
 * distribute left
 *
 * @example
 *   distl(['a',[1,2,3]]); //[['a',1],['a',2],['a',2]]
 */

fun.distl = [x, list] => [[x,e] for e in list]

/**
 * distr(list,x)
 * distribute right
 *
 * @example
 *   distr([[1,2,3],'a']); //[[1,'a'],[2,'a'],[3,'a']
 */

fun.distr = [list,x] => [[item,x] for item in list]

/**
 * insl(list)(operator)
 * insert left operator  
 * given a binary associative `operator` 
 * returns a function that given an array 
 * returns the riduction of the array by the operator
 */

fun.insl = operator => list => list.reduce(operator);

/**
 * insr(operator)(list)
 * insert right operator  
 * given a binary associative `operator` 
 * returns a function that given an array 
 * returns the right riduction of the array by the operator
 */

fun.insr = operator => list => list.reduceRight(operator);

/**
 * al([x,list])
 * append left
 * append `x` on the left of `list`
 */

fun.al = [x,list] => [x].concat(list)

/**
 * ar([list,x])
 * append right
 * append `x` on the right of `list`
 */

fun.ar = [list,x] => list.concat([x])

/**
 * last(list)
 * returns the last element of the given `list`
 *
 * @example
 *   last([0,1,2,3,4,5]); //5
 */

fun.last = list => list[list.length - 1]

/** 
 * list(x)
 * returns a list containing `x`
 */

fun.list = x => [x]

/**
 * len(list)
 * returns the length of the given list
 */

fun.len = list => list.length

/**
 * first(list)
 * returns the first element of the given list
 */ 

fun.first = list => list[0]

/**
 * tail(list)
 * returns the non-empty list but its first element
 * 
 * @example
 *   tail([0,1,2,3,4,5]); //[1,2,3,4,5]
 */

fun.tail = list => list.slice(1)

/**
 * butlast(list)
 * returns the non-empty lis but its last element
 * 
 * @example
 *   butlast([0,1,2,3,4,5]); //[0,1,2,3,4]
 *   butlast([]); //[]
 */

fun.butlast = list => list.slice(0,-1)

/**
 * bigger([a,b])
 * returns the bigger of [a,b]
 * 
 * @example
 *   bigger([4,9]); //9
 */

fun.bigger = [a,b] => a > b ? a : b;

/**
 * smaller([a,b])
 * returns the smaller of [a,b]
 * 
 * @example
 *   bigger([4,9]); //9
 */

fun.smaller = [a,b] => a < b ? a : b;

/**
 * biggest(numbers)
 * returns the biggest in `numbers`
 * 
 * @example
 *   biggest([4,9,2,8,1,7]); //9
 */

fun.biggest = numbers => Math.max.apply(null, numbers)

/**
 * smallest(numbers)
 * returns the smallest in `numbers`
 *
 * @example
 *   smallest([4,9,2,8,1,7]); //1
 */

fun.smallest = numbers => Math.min.apply(null, numbers)

/**
 * prod
 * product scalar by vector
 */

fun.prod = [scalar, vector] => [scalar*value for value in vector]

/**
 * E
 */

fun.E = Math.E;

/**
 * LN2
 */

fun.LN2 = Math.LN2;

/**
 * LN10
 */

fun.LN10 = Math.LN10;

/**
 * LOG2E
 */

fun.LOG2E = Math.LOG2E;

/**
 * LOG10E
 */

fun.LOG10E = Math.LOG10E;

/**
 * PI
 */

fun.PI = Math.PI;

/**
 * SQRT1_2
 */

fun.SQRT1_2 = Math.SQRT1_2;

/**
 * SQRT2
 */

fun.SQRT2 = Math.SQRT2;

/**
 * abs
 * returns the absolute value of the given number
 */

fun.abs = Math.abs;

/**
 * acos
 * returns the arc-cosine of the given number
 */

fun.acos = Math.acos;

/**
 * asin
 * returns the arc-sine of the given number
 */

fun.asin = Math.asin;

/**
 * atan
 * returns the arc-tangent of the given number
 */

fun.atan = Math.atan;

/**
 * atan2
 * returns the squared arc-tangent of the given number
 */

fun.atan2 = Math.atan2; 

/**
 * ceil
 * returns the ceil of the given number
 */

fun.ceil = Math.ceil; 

/**
 * cos
 * returns the cosine of the given number
 */

fun.cos = Math.cos; 

/**
 * exp
 * returns the exponential of the given value (e^value)
 */

fun.exp = Math.exp;

/**
 * floor
 * returns the floor of the given number
 */

fun.floor = Math.floor;

/**
 * log
 * returns the log of the given number
 */

fun.log = Math.log;

/**
 * floor
 * returns the floor of the given number
 */

fun.floor = Math.floor;

/**
 * power
 * returns the n-th power of the given value (value^n)
 */

fun.pow = [base,exp] => Math.pow(base,exp)

/**
 * random
 * returns a random number in [0, 1) interval
 */

fun.random = Math.random;  

/**
 * round
 * returns the given number rounded 
 */

fun.round = Math.round;  

/**
 * sin
 * returns the sine of the given number
 */

fun.sin = Math.sin;  

/**
 * sqrt
 * returns the squared root of the given number
 */

fun.sqrt = Math.sqrt; 

/**
 * tan
 * returns the tan of the given number
 */

fun.tan = Math.tan;
