import { calcChargeCost, calcImportCost } from "./evCalculations";
import { calcFuelCost, calcServicingCost } from "./fuelCalculations";

export function compareVehicles(data) {
  console.log(data);
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

  //Display final comparison result

  alert(
    `EV Costs: Rs. ${new Intl.NumberFormat("en-IN").format(
      evCost
    )} and Fuel Costs: Rs. ${new Intl.NumberFormat("en-IN").format(
      fuelVehicleCost
    )}. So you will save Rs. ${new Intl.NumberFormat("en-IN").format(
      fuelVehicleCost - evCost
    )} in ${chargeCost.batteryLife} years`
  );
}
