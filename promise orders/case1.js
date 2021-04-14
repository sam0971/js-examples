// Promises

// What will be the order of console logs in the output?

// For example: Call rest api and wait for response.
// We use Axios for external calls. Axios implements promises. For now I create a mocked promise below that will return data when completed.
const externalResponse1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'External data call', somethingElse: 'example'});
    }, 2000);
});

const externalResponse2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'External data call', somethingElse: 'example'});
    }, 5000);
});

const externalResponse3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'External data call', somethingElse: 'example'});
    }, 5000);
});

// Exectue the promise. In this example we wait for each promise to resolve first, before continuing.
externalResponse1.then((response1) => {
    console.log('response1', response1);
    return externalResponse2;
}).then((response2) => {
    console.log('response2', response2);
    return externalResponse3;
}).then((response3) => {
    console.log('response3', response3);
});

// Output will be:
// response 1
// response 2
// response 3
