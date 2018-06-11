# Promise
synchronous style error handling to Async / Callback style code

## Callback 
1. Never call the callback twice.
2. Never throw an error.

## Promise
status: 
* pending, 
* settled: 
    * fulfilled (val)
    * rejected (reason)

1. create a promise:
    ```
    const promise = new Promise((resolve, reject) => {
        // the resolve / reject functions control the fate of the promise
    });
    ```

2. fate
* if resolved => ```.then```
* if rejected => ```.catch```

3. chained promises
* ```.then``` can create a chain of promises
* ```.resolve(sth).then``` only called once the value is resolved
* ```.reject(new Error()).then.then.then.catch``` aggregate the error handling with a single catch

4. 
* reject if an error occurs,
* resolve if it is all good.



