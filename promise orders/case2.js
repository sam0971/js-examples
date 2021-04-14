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
    }, 3000);
});

// Execute the promises.
// JS Does not wait for the above promise, this and the next promises will execute at the same time.
externalResponse1.then((response1) => {
    console.log('response1', response1);
});

externalResponse2.then((response2) => {
    console.log('response2', response2);
});

externalResponse3.then((response3) => {
    console.log('response3', response3);
});

// Output:
// response1
// response3
// response2
