import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  myError: Array<String> = [];
  
  constructor(private authService: AuthService, private router: Router ) { }
  
  ngOnInit() {
  }
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      username: this.username,
      password: this.password

    }
    if (form.valid) {
      this.processing = true;
      this.authService.login(data)
        .then((result) => { return this.router.navigate(['/articles/profile'])})
        .catch((err) => {
          this.error = err.error.error; 
          this.processing = false;
          this.feedbackEnabled = false;
 
        });
    }
  }

}
