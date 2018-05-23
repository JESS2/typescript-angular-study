import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './Student';
import { Department } from './Department';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private URL = 'http://localhost:8080/studentServer/api/'
  private http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  getStudents(): Promise<Student[]> {
    return this.http.get(`${this.URL}students`)
              .toPromise()
              .then(res => res.json() as Student[])
              .catch(this.handleError);
  }

  getStudent(id: number): Promise<Student> {
    let url = `${this.URL}student/${id}`;
    return this.http.get(url)
              .toPromise()
              .then(res => res.json() as Student[])
              .catch(this.handleError);
  }

  getDepartments(): Promise<Department[]> {
    return this.http.get(`${this.URL}departments`)
              .toPromise()
              .then(res => res.json() as Department[])
              .catch(this.handleError)
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
