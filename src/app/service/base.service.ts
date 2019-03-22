import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // baseUrl: string = 'http://localhost:8080';
  baseUrl: string = 'http://helloworld';
  // baseUrl: string = 'http://helloworld-spring.apps.testraa.se';
  constructor() { }

}
