import { Component, OnInit } from '@angular/core'; // Importez OnInit
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';  // Import RouterModule
import { BonsLivraisonService, BonLivraison as ServiceBonLivraison  } from '../services/bons-livraison.service'; // Ajoutez cette ligne

// Définir l'interface BonLivraison
interface BonLivraison {
  referenceBonLivraison: string;
  referenceMarche: string;
  dateLivraison: Date | null; // Vous pouvez utiliser null si la date n'est pas toujours définie
  observation: string;
}

@Component({
  selector: 'app-bon-livraison',
  templateUrl: './bons-livraison.component.html',
  styleUrls: ['./bons-livraison.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]  // Include FormsModule here
})
export class BonsLivraisonComponent implements OnInit { // Implémentez OnInit
  referenceBonsLivraison: string = '';
  referenceMarche: string = '';
  dateLivraison: Date | null = null;
  observation: string = '';

  // Liste des bons de livraison
  bonsLivraison: BonLivraison[] = [];

  constructor(private bonsLivraisonService: BonsLivraisonService) {} // Injecter le service

  ngOnInit(): void {
    this.fetchBonsLivraison(); // Appel de la méthode pour récupérer les bons de livraison
  }

  fetchBonsLivraison(): void {
    this.bonsLivraisonService.getBonsLivraison().subscribe(data => {
      this.bonsLivraison = data.map(bon => ({
        referenceBonLivraison: bon.referenceBonLivraison,
        referenceMarche: bon.referenceMarche,
        dateLivraison: new Date(bon.dateLivraison), // Conversion de string à Date
        observation: bon.observation,
      }));
    });
  }

  // Méthode pour ajouter un bon de livraison à la liste
  ajouterBonLivraison() {
    if (this.referenceBonsLivraison && this.referenceMarche && this.dateLivraison) {
      this.bonsLivraison.push({
        referenceBonLivraison: this.referenceBonsLivraison,
        referenceMarche: this.referenceMarche,
        dateLivraison: this.dateLivraison,
        observation: this.observation,
      });
      // Réinitialiser les champs du formulaire
      this.referenceBonsLivraison = '';
      this.referenceMarche = '';
      this.dateLivraison = null;
      this.observation = '';
    }
  }

  search() {
    // Logic for handling search can be implemented here
    console.log('Search initiated for Bon Livraison');
    console.log('Reference Bon Livraison:', this.referenceBonsLivraison);
    console.log('Reference Marché:', this.referenceMarche);
    console.log('Date Livraison:', this.dateLivraison);
    console.log('Observation:', this.observation);
  }
}
