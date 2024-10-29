import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BonLivraison {
    referenceBonLivraison: string;
    referenceMarche: string;
    dateLivraison: string; // ou Date si vous utilisez un objet Date
    observation: string;
}

@Injectable({
    providedIn: 'root',
})
export class BonsLivraisonService {
    private apiUrl = 'http://localhost:3000/api/bons-livraison'; // Remplacez par l'URL de votre API

    constructor(private http: HttpClient) {}

    getBonsLivraison(): Observable<BonLivraison[]> {
        return this.http.get<BonLivraison[]>(this.apiUrl);
    }
}
