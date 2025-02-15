import { Component, OnInit } from '@angular/core';
import { LogementService } from '../services/logement.service'

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {
  logements: any[] = [];

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.getLogements();
  }

  getLogements(): void {
    this.logementService.getAllLogements().subscribe((data) => {
      this.logements = data;
    });
  }
}
