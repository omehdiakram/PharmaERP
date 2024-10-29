import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';  // Import RouterModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]  // Include RouterModule here
})
export class DashboardComponent {
  showBLSubMenu = false;
  // Your component logic can go here if needed
  constructor(private router: Router) {}
  toggleBLSubMenu() {
    this.showBLSubMenu = !this.showBLSubMenu; // Inverse l'état du sous-menu
  }
  
  logout() {
    // Clear user session data if necessary
    // For example: this.authService.logout();

    // Navigate to login page
    this.router.navigate(['/']); // Adjust path if your login route is different
  }
}
