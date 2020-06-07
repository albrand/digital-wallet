import { Component, OnInit } from "@angular/core";
import { RentalService } from "../services/rental.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  tiles: Array<Object>;
  constructor(private rentals: RentalService) {}

  ngOnInit() {
    this.tiles = this.rentals.getRentals();
    console.log(this.tiles);
  }
}
