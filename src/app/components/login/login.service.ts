import { Injectable } from '@angular/core';

interface Credentials {
  email: String;
  password: Int32Array | String;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  fakeUser = {
    email: 'amberescoin@mail.com',
    password: '2943d2706a4f9d4e73011ca32fe87679', //md5 de 'amberescoin'
  };

  loginByEmail(credentials: Credentials): any {
    const { email, password } = credentials;

    return new Promise((resolve, reject) => {
      //simulo la consulta a un servidor
      setTimeout(() => {
        if (email !== this.fakeUser.email) {
          return reject({ message: "User doesn't exist" });
        }

        if (password !== this.fakeUser.password) {
          return reject({ message: 'Invalid password' });
        }

        //Aqui, en caso de usar jwt, obtengo el token y lo guardo en una variable de sesion
        return resolve({ message: 'Login successful' });
      }, 3000);
    });
  }
}
