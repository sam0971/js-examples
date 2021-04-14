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

// Execute the promise and do something with the data we received.
externalResponse.then((response) => {
    response.somethingElse = 'example updated in a promise chain';

    // Pass the object to the next promise chain.
    return response;
}).then((updatedResponse) => {
    // Output the result to console.
    console.log(updatedResponse);
});


// Example of a promise that fails
const externalResponseFail = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Something really really bad happened, in stead of resolve we use reject now. This will be catched in the .catch below.
      reject({status: '500', data: 'External data call', somethingElse: 'example'});
    }, 2000);
});

// Execute the promise and do something with the data we received.
externalResponseFail.then((response) => {
    response.somethingElse = 'example updated in a promise chain';

    // Pass the object to the next promise chain.
    return response;
}).then((updatedResponse) => {
    // We will not get here
    console.log(updatedResponse);
}).catch((e) => {
    // We will get here when something in the promise chain failed.
    console.log('Error occurred', e);
});
