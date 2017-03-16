import someUtil from 'Utilities/someUtil';

const obj1 = {
    thing1: 1,
    thing2: 2,
};

const obj2 = {
    thing3: 3,
    thing4: 4,
    myFunc: someUtil,
};

export default { ...obj1, ...obj2 }