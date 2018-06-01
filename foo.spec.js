const proxyquire = require('proxyquire');
const sinon = require('sinon');

let stubs = {
    add: sinon.stub().callsFake(() => {
        console.log('initial stub');
    })
};
const foo = proxyquire('./foo',{ './myLibrary': stubs });

foo(3);    // prints 'initial stub'

/**** later, in a test: ****/
stubs.add.callsFake(() => {
    console.log('a more specific stub');
});
foo(3);    // prints 'a more specific stub' appropriately