function partial (fp)
{
    var args = arguments;

    return function(){
        var a = Array.prototype.slice.call(args, 1);
        for(let i=0, j=0; i<a.length; i++)
        {
            if(a[i] == undefined)
            {
                a[i] = arguments[j++];
            }
        }
        return fp.apply(this, a);
    };
}

let square = partial(Math.pow, undefined, 2);
let sqrt = partial(Math.pow, undefined, 0.5);
let cubicroot = partial(Math.pow, undefined, 1/3);
let exp = partial(Math.pow, Math.E, undefined);

console.log(square(5));
console.log(sqrt(2));
console.log(cubicroot(8));
console.log(exp(10));

console.log(partial(Math.pow, 3, 3)(3));                                                                                       