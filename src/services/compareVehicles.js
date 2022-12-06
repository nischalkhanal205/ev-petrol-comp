import { calcChargeCost, calcImportCost } from "./evCalculations";
import {
  calcCo2Produced,
  calcFuelCost,
  calcServicingCost,
} from "./fuelCalculations";

export function compareVehicles(data) {
  let evCost;
  let fuelVehicleCost;

  const chargeCost = calcChargeCost(data);

  //calculate ev cost
  if (data.motorPower) {
    evCost = calcImportCost(data) + chargeCost.totalCost;
  } else {
    evCost = Number(data.evInitialBuyingCost) + chargeCost.totalCost;
  }

  //calculate fuel cost
  const fuelCost = calcFuelCost(data);
  const servicingCost = calcServicingCost(data);
  fuelVehicleCost =
    fuelCost.fuelCost + servicingCost + Number(data.fuelInitialBuyingCost);

  //Calculate Co2 Produced
  const co2Produced = calcCo2Produced({
    totalFuelConsumption: fuelCost.totalFuelConsumption,
    fuelVehicle: data.fuelVehicle,
  });

  //Display final comparison result
  return {
    evCost: new Intl.NumberFormat("en-IN").format(evCost),
    fuelVehicleCost: new Intl.NumberFormat("en-IN").format(fuelVehicleCost),
    saving: new Intl.NumberFormat("en-IN").format(fuelVehicleCost - evCost),
    batteryLife:
      data.comparisonDuration == "lifetime"
        ? chargeCost.batteryLife
        : data.comparisonDuration,
    costPerCharge: chargeCost.costPerCharge,
    totalChargeCost: new Intl.NumberFormat("en-IN").format(
      chargeCost.totalCost
    ),
    totalFuelConsumption: fuelCost.totalFuelConsumption,
    servicingCost: new Intl.NumberFormat("en-IN").format(servicingCost),
    co2Produced: new Intl.NumberFormat("en-IN").format(co2Produced),
    comparisonDuration: data.comparisonDuration
  };
}
