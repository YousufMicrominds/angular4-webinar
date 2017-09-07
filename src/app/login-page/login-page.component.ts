import { Component, OnInit } from '@angular/core';
import { AppServicesService } from './../app-services.service';

@Component({
	selector: 'login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.css'],
	providers: [AppServicesService]
})
export class LoginPageComponent implements OnInit {

	constructor(
		private appServicesService: AppServicesService
	) { }

	ngOnInit() {
	}

	private validate(email: string, password: string): boolean {
		if(email.match(/[a-z0-9\.]?@[a-z]?\.[a-z]?/g) && password.length >= 6) {
			return true;
		}
		return false;
	}

	signInUser(email: string, password: string): void {
		if(this.validate(email, password)) {
			if(this.appServicesService.isUserValid(email,password)) {
				alert("Logged In");
			} else {
				alert("Invalid User");
			}
		} else {
			alert("Invalid email or password");
		}
	}

	signUpUser(email: string, password: string): void {
		if(this.validate(email, password)) {
			if(this.appServicesService.signUpUser(email,password)) {
				alert("User Creation Successful");
			} else {
				alert("User Not Created");
			}
		}
	}

}
