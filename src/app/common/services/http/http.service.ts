import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  fakeUser = {
    email: 'amberescoin@mail.com',
    password: '2943d2706a4f9d4e73011ca32fe87679', //md5 de 'amberescoin'
  };
  
  get() {}
}
