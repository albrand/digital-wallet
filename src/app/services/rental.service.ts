import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RentalService {
  constructor() {}

  public getRentals() {
    return [
      {
        title: "Total de ativos",
        qty: "18",
        value: "R$ 22.000,00",
      },
      {
        title: "Renda Variável",
        qty: "18",
        value: "R$ 22.000,00",
      },
      {
        title: "Renda fixa",
        qty: "18",
        value: "R$ 22.000,00",
      },
    ];
  }
}
