// Promises

// What will be the order of console logs in the output?

// For example: Call rest api and wait for response.
// We use Axios for external calls. Axios implements promises. For now I create a mocked promise below that will return data when completed.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'response1'});
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'response2'});
    }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'response3'});
    }, 3000);
});

// Execute all the 3 promises at once and wait until all of them return a response.
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// Output:
// Array [
// response1
// response2
// response3
// ]
