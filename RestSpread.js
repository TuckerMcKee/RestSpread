const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0);

function findMin(...nums) {
    return Math.min(nums);
}

function mergeObjects(firstObj, secObj) {
    return {...firstObj, ...secObj};
}

const doubleAndReturnArgs = (arr, ...args) => arr.concat(args.map(val => val * 2));

const removeRandom = (...items) => {
    let randomIndex = Math.floor(math.random() * items.length);
    return [...items.slice(0,randomIndex),...items.slice(randomIndex + 1)]
}

const extend = (arr1,arr2) => [...arr1,...arr2];

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj,key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1,obj2) => ({
    ...obj1,...obj2
})

const update = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}