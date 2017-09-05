import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AppServicesService {

	users: User[] = [];

	constructor() { }

	signUpUser(email: string, password: string): boolean {
		this.users.push({ email: email, password: password});
		return true;
	}

	isUserValid(email: string, password: string): boolean {
		for(let i=0;i<this.users.length;i++) {
			if(this.users[i].email == email && this.users[i].password == password) {
				return true;
			}
		}
		return false;
	}
}
