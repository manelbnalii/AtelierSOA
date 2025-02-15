import { Component, OnInit } from '@angular/core';
import { LogementService } from '../services/logement.service';
import { Logement } from '../logement';

@Component({
  selector: 'app-logement-add',
  templateUrl: './logement-add.component.html',
  styleUrls: ['./logement-add.component.css']
})
export class LogementAddComponent implements OnInit {

  logement: Logement = new Logement();

  constructor(private logementService: LogementService) { }

  ngOnInit(): void {
  }

  // Méthode pour soumettre le formulaire
  addLogement(): void {
    this.logementService.addLogement(this.logement).subscribe(
      (response) => {
        console.log('Logement ajouté:', response);
        // Redirige ou affiche un message de succès après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du logement:', error);
      }
    );
  }
}
