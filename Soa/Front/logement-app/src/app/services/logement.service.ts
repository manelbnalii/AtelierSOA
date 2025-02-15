import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement } from '../logement';


@Injectable({
  providedIn: 'root',
})
export class LogementService {
  private apiUrl = 'http://localhost:8081/LogementRendezVous_Etudiant_war_exploded/api/logement/getAll'; // Remplace par l'URL de ton API

  constructor(private http: HttpClient) {}

  getAllLogements(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addLogement(logement: Logement): Observable<Logement> {
    return this.http.post<Logement>(`${this.apiUrl}/add`, logement);
  }
}
