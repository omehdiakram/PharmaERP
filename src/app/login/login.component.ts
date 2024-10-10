import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For form handling
import { CommonModule } from '@angular/common';  // For common directives
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',  // Change this if necessary
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Ensure FormsModule is included
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) {}  // Inject Router

  login() {
    // Check if the username and password are correct
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginError = '';  // Clear any previous error messages
      this.router.navigate(['/dashboard']);  // Navigate to dashboard on successful login
    } else {
      this.loginError = 'Identifiant ou mot de passe incorrect.'; // Show error message
    }
  }
}
