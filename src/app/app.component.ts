import { Component } from "@angular/core";
import { cars } from "./data";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  columns = [];
  carsData = cars;
  selectedColumns = [];
  selectedCar1;

  ngOnInit() {
    this.columns = [
      { field: "vin", header: "Vin", width: "10%" },
      { field: "year", header: "Year", width: "20%" },
      { field: "brand", header: "Brand", width: "15%" },
      { field: "color", header: "Color", width: "5%" }
    ];
  }
}
