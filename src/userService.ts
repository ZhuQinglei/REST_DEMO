import { User } from './user';
import { HTTPClient } from './http';
import { Promise } from 'es6-promise';

export class UsersService {
    usersUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
    private http: HTTPClient = new HTTPClient()
    
    constructor() {}
    
    /** GET users from the server */
    getUsers(): Promise<User[]> {
        return this.http.requestPromise<null, Response>('GET', this.usersUrl, null)
            .then(resp => {
                console.log(resp)
                return Promise.resolve(resp);
            }).catch(err => {
                console.log(err.message);
                return Promise.reject(new Error('something bad happened'))
            })
    }
    getUser(id: number): Promise<User> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.requestPromise<null, Response>('GET', url, null)
            .then(resp => {
                console.log(resp)
                return Promise.resolve(resp);
            }).catch(err => {
                console.log(err.message);
                return Promise.reject(new Error('something bad happened'))
            })
    }
    //////// Save methods //////////

    /** POST: add a new user to the database */
    addUser(user: User): Promise<User> {
        return this.http.requestPromise('POST', this.usersUrl, user)
            .then(resp => {
                console.log('no error')
                console.log(resp)
                return Promise.resolve();
            }).catch(err => {
                console.log(err.message)
                return Promise.reject(new Error('something bad happened'))
            })
    }
    
    /** DELETE: delete the user from the server */
    deleteUser(id: number): Promise<void> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.requestPromise('DELETE', url, id)
            .then(resp => {
                console.log('no error')
                console.log(resp)
                return Promise.resolve();
            }).catch(err => {
                console.log(err.message)
                return Promise.reject(new Error('something bad happened'))
            })
    }

    /** PUT: update the user on the server. Returns the updated user upon success. */
    updateUser(user: User): Promise<User>  {
        const url = `${this.usersUrl}/${user.id}`;
        return this.http.requestPromise('PUT', url, user)
            .then(resp => {
                console.log('no error')
                console.log(resp)
                return Promise.resolve(resp);
            }).catch(err => {
                console.log(err.message)
                return Promise.reject(new Error('something bad happened'))
            })
    }
}
