import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]  // Include RouterModule here
})
export class DashboardComponent {
  // Your component logic can go here if needed
}
