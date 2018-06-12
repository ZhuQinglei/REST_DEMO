// HTTP functions
import { Promise } from 'es6-promise';
// Using callbacks:
export class HTTPClient {
    request<Request, Response>(
        method: 'GET' | 'POST' | 'DELETE' | 'PUT',
        url: string,
        content?: Request,
        callback?: (response: Response) => void,
        errorCallback?: (err: any) => void) {

        const request = new XMLHttpRequest();
        request.open(method, url, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                console.log(this.status, this.statusText)
                const data = JSON.parse(this.response) as Response;

                callback && callback(data);
            } else {
                // TODO: error handling
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function (err) {
            // There was a connection error of some sort
            errorCallback && errorCallback(err);
        };
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            request.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded; charset=UTF-8');
        }
        request.send(content);
    }

    // Using promises:
    requestPromise<Request, Response>(
        method: 'GET' | 'POST' | 'DELETE' | 'PUT',
        url: string,
        content?: Request
    ): Promise<Response> {
        return new Promise<Response>((resolve, reject) => {
            this.request(method, url, content, resolve, reject);
        });
    }
}
