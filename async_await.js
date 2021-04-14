// Promises

// Execute something and wait for the response.

// For example: Call rest api and wait for response.
// We use Axios for external calls. Axios implements promises. For now I create a mocked promise below that will return data when completed.
const externalResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Everything went ok, we use resolve to conclude the promise and return the values.
        resolve({status: '200', data: 'External data call', somethingElse: 'example'});
    }, 2000);
});

// Exectue the promise and do something with the data we received.
// externalResponse.then((response) => {
//     response.somethingElse = 'example updated in a promise chain';
//     // Pass the object to the next promise chain.
//     return response;
// }).then((updatedResponse) => {
//     // Output the result to console.
//     console.log(updatedResponse);
// });

// The code below is the same as the promise in comment above.
async function executePromise() {
    const response = await externalResponse;
    response.somethingElse = 'example updated in a promise chain';
    console.log(response);
}

executePromise();

// Example of a promise that fails
const externalResponseFail = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Something really really bad happened, in stead of resolve we use reject now. This will be catched in the .catch below.
      reject({status: '200', data: 'External data call', somethingElse: 'example'});
    }, 2000);
});

// Exectue the promise and do something with the data we received.
// externalResponseFail.then((response) => {
//     response.somethingElse = 'example updated in a promise chain';

//     // Pass the object to the next promise chain.
//     return response;
// }).then((updatedResponse) => {
//     // Output the result to console.
//     console.log(updatedResponse);
// }).catch((e) => {
//     console.log('Error occurred', e);
// });

// The code below is the same as the promise in comment above.
async function executeFailedPromise() {
    try {
        const response = await externalResponseFail;
        response.somethingElse = 'example updated in a promise chain';
        console.log(response);
    } catch (e) {
        console.log('Error occurred', e);
    }
}

executeFailedPromise();

