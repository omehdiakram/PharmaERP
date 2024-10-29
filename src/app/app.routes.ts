import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Import the login component
import { DashboardComponent } from './dashboard/dashboard.component';  // Import the dashboard component
// Import additional components for each menu item
import { BonsLivraisonComponent } from './bons-livraison/bons-livraison.component';  // Import BonLivraisonComponent
import { MarchesComponent } from './marches/marches.component';
import { GestionEntreComponent } from './gestion-entre/gestion-entre.component';
import { ReapprovisionnementComponent } from './reapprovisionnement/reapprovisionnement.component';
import { GestionSortiesComponent } from './gestion-sorties/gestion-sorties.component';
import { ExploitationComponent } from './exploitation/exploitation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
import { EnCoursMarcheComponent } from './en-cours-marche/en-cours-marche.component';
import { NouveauMarcheComponent } from './nouveau-marche/nouveau-marche.component';
import { AppelOffreMarcheComponent } from './appel-offre-marche/appel-offre-marche.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },  // Default route for login
  { 
    path: 'dashboard', 
    component: DashboardComponent,  // Route for dashboard
    children: [
      { path: '', redirectTo: 'marches', pathMatch: 'full' }, // Redirect to marches by default
      { path: 'marches', component: MarchesComponent }, // Marches form
      { path: 'gestion-entre', component: GestionEntreComponent },  // Gestion des entrées
      { path: 'reapprovisionnement', component: ReapprovisionnementComponent },  // Réapprovisionnement
      { path: 'gestion-sorties', component: GestionSortiesComponent },  // Gestion des sorties
      { path: 'exploitation', component: ExploitationComponent },  // Exploitation
      { path: 'configuration', component: ConfigurationComponent },  // Configuration
      { path: 'administration', component: AdministrationComponent },  // Administration
      { path: 'en-cours-marche', component: EnCoursMarcheComponent },  // En cours marche
      { path: 'nouveau-marche', component: NouveauMarcheComponent },  // Nouveau marche
      { path: 'bon-livraison', component: BonsLivraisonComponent },  // Ajout de la route pour BonLivraisonComponent
      { path: 'appel-offre-marche', component: AppelOffreMarcheComponent }  // Appel d'offre
    ]
  }
];
