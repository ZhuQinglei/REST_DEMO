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
    
    // /** DELETE: delete the user from the server */
    // deleteUser(id: number): Observable<{}> {
    //     const url = `${this.usersUrl}/${id}`;
    //     return this.http.delete(url, httpOptions)
    //         .pipe(
    //             catchError(this.handleError('deleteUser'))
    //         );
    // }

    // /** PUT: update the user on the server. Returns the updated user upon success. */
    // updateUser(user: User): Observable<User> {
    //     httpOptions.headers =
    //         httpOptions.headers.set('Authorization', 'my-new-auth-token');

    //     const url = `${this.usersUrl}/${user.id}`;
    //     return this.http.put<User>(url, user, httpOptions)
    //         .pipe(
    //             catchError(this.handleError('updateUser', user))
    //         );
    // }

}
