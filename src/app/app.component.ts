import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For forms
import { CommonModule } from '@angular/common';  // For common directives
import { Router, RouterModule } from '@angular/router';  // Import Router and RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]  // Ensure RouterModule is included
})
export class AppComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  title = 'pharmacy-app';

  constructor(private router: Router) {}  // Inject Router

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginError = '';  // Clear any error messages
      this.router.navigate(['/dashboard']);  // Navigate to dashboard on successful login
    } else {
      this.loginError = 'Identifiant ou mot de passe incorrect.'; // Show error message
    }
  }

  logout() {
    this.username = '';
    this.password = '';
    this.router.navigate(['']);  // Navigate back to login page
  }
}
