import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // baseUrl: string = 'http://localhost:8080';
  baseUrl: string = 'http://helloworld2:8080';
  constructor() { }

}
