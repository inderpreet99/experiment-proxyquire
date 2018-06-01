const proxyquire = require('proxyquire');
let stubs = {
    add: () => {
        console.log('initial stub');
    }
};
const foo = proxyquire('./foo',{ './myLibrary': stubs });

foo(3);    // prints 'initial stub'

/**** later, in a test: ****/
stubs.add = () => { console.log('a more specific stub'); }
foo(3);    // prints 'initial stub' again, even though stub has been changed;