import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-marches',
  templateUrl: './marches.component.html',
  styleUrls: ['./marches.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]  // Include FormsModule here
})
export class MarchesComponent {
  refMarche: string = '';
  fournisseur: string = '';
  volume: string = '';
  dateNotificationFrom: Date | null = null;
  dateNotificationTo: Date | null = null;
  dateLimiteFrom: Date | null = null;
  dateLimiteTo: Date | null = null;
  situation: string = 'en-cours';
  typeMarche: string = '';

  search() {
    // Logic for handling search can be implemented here
    console.log('Search initiated');
    console.log('Ref Marché:', this.refMarche);
    console.log('Fournisseur:', this.fournisseur);
    console.log('Volume:', this.volume);
    console.log('Date Notification Between:', this.dateNotificationFrom, 'and', this.dateNotificationTo);
    console.log('Date Limite Between:', this.dateLimiteFrom, 'and', this.dateLimiteTo);
    console.log('Situation:', this.situation);
    console.log('Type Marché:', this.typeMarche);
  }
}
