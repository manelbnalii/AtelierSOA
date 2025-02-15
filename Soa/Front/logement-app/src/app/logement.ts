export class Logement {
  reference: number;
  adresse: string;
  delegation: string;
  gouvernorat: string;
  type: string;
  description: string;
  prix: number;

  constructor(
    reference: number = 0,
    adresse: string = '',
    delegation: string = '',
    gouvernorat: string = '',
    type: string = '',
    description: string = '',
    prix: number = 0
  ) {
    this.reference = reference;
    this.adresse = adresse;
    this.delegation = delegation;
    this.gouvernorat = gouvernorat;
    this.type = type;
    this.description = description;
    this.prix = prix;
  }
}
