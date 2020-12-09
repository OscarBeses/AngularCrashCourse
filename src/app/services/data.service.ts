import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  url: string;

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  getAll() {
    try {
      return this.http.get(this.url)
    } catch(error){
      this.handleError(error);
    }
  }

  create(resource) {
    try {
      return this.http.post(this.url, JSON.stringify(resource))
    } catch(error){
      this.handleError(error);
    }
  }

  update(resource) {
    try {
      return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    } catch(error){
      this.handleError(error);
    }
  }

  delete(id) {
    try {
      return this.http.delete(this.url + '/' + id)
    } catch(error){
      this.handleError(error);
    }
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
