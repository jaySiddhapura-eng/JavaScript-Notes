// object

// variable object delcaration
let person = {
    Age:20,
    Name: 'abc'
};

// access variable
person.Name = 'pqr';     // set
person.age = 100;
console.log('accessing whole object' + person);
console.log('accessing name from person object : '+ person.Name );

// change the KV using bracket notation
// useful when differnet keys can be inserted by the user
// accessing the keypair value dynamically during run time
person['Age'] = 22; 
let userProvidedKey = 'Name';
let userProvidedValue = 'Jay';
person[userProvidedKey] =  userProvidedValue;
console.log('------new Person------')
console.log(person['Age']);
console.log(person[userProvidedKey]); 
console.log('----------------------')

// dynamic typing can apply too
person.Name = 2;
console.log('changed datatype of name variable : '+ typeof person.Name);
person.Age = 'abvp';
console.log('changed datatype of age variable : '+ typeof person.Age);

// another Example
let sampleObject = {
    key1 : 'value1',
    key2 : 'value2'
};

// add new attribute/key-value pair to the sampleObject
console.log('sampleObject before adding new KV pair')
console.log(sampleObject);
sampleObject.key3 = 'value3'
console.log('sampleObject after adding new KV pair')
console.log(sampleObject);

// constant object declaration
const math = {
    pi:3.14,
    g:9.8,
    time: 'sec'
};

// accessing the constant object
// const does not make the value of the variable immutable but instead makes the binding of the variable immutable.
math.pi = 3.14345;      //set
math.g = 9.9;
math.time = 'min'
console.log(math);
// adding new KV pair in math object 
math.v = 250;
console.log(math);

// what is object freez
// effect of object freez on constant object
// it makes the constant object immune to any change 
Object.freeze(math);
math.h = 100;           // because of object freez this KV will not be added to the constant object
console.log(math)

math.pi = 3.14444444;   // because of object freez value of already present key will not be change
console.log(math.pi);

math.pi = 'string'      // becuase of obejct freez type of the KV can not be change
console.log(math.pi);


//object freez on variable object
Object.freeze(sampleObject);
sampleObject.key1='value11';        // the value of key is not changing
console.log(sampleObject.key1); 

sampleObject.key1=99;               // data type of KV is not changing
console.log(sampleObject.key1);

sampleObject.key4 = 'value4';       // new KV can not be added
console.log(sampleObject);
// this programming design can be useful during implementation of singleton 
