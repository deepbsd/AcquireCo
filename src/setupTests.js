import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
});

// configure local storage Mock
class LocalStorageMock {
    constructor(){
        this.store = {};
    }

    clear(){
        this.store = {};
    }

    getItem(key){
        return this.store[key] || null;
    }

    setItem(key, value){
        this.store[key] = value.toString();
    }

    removeItem(key){
        delete this.store[key];
    }
};

// configure mock fetch
global.fetch = require('jest-fetch-mock');
fetch.mockResponse(JSON.stringify({ testing: true }));

global.localStorage = new LocalStorageMock;
