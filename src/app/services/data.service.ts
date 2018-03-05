import { Http, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.post(this.url,{})
      .map(response => response.json()
    ).catch(this.handleError);
  }

  get(resource) {
    console.log("get start");
    console.log(resource);
    return this.http.post(this.url,resource)
      .map(response => response.json());
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())      
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      console.log("error 400.");// return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      console.log("error 404.");
      // return Observable.throw(new NotFoundError());
    
    // return Observable.throw(new AppError(error));
    return Observable.throw(new Error("error"));
  }
}
