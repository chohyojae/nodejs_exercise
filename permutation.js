function permutation(a) {
    return a.reduce( function(list, element) {
        let newList = [];

        list.forEach(function(seq) {
            for(let i=seq.length; i>=0; i--) {
                let newSeq = [].concat(seq);
                newSeq.splice(i, 0, element);
                newList.push(newSeq);
            }
        });
        return newList;
    }, [[]]);
};

let array = [1,2,3];
let result = permutation(array);
console.log(result);