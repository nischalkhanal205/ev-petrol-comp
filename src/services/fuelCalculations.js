import { calcBatteryLife } from "./evCalculations";

export function calcFuelCost({
  dailyTravelDistance,
  mileage,
  fuelVehicle,
  comparisonDuration,
  chargeCycle,
  claimedRange,
}) {
  //Convert strings to number for comparison
  dailyTravelDistance = Number(dailyTravelDistance);
  mileage = Number(mileage);

  const perDayConsumption = dailyTravelDistance / (mileage);

  //Get the battery life
  const batteryLife = calcBatteryLife({
    claimedRange,
    dailyTravelDistance,
    chargeCycle,
  });

  //Calculate the total fuel consumed according to the comparisonDuration parameter
  const totalFuelConsumption = Math.round(
    perDayConsumption *
      (comparisonDuration == "lifetime"
        ? batteryLife * 365
        : Number(comparisonDuration) * 365)
  );

  //?diesel = 178/litre (28 Nov, 2022)
  //?petrol = 181/litre (28 Nov, 2022)

  const fuelCost = Math.round(
    fuelVehicle == "diesel"
      ? totalFuelConsumption * 178
      : totalFuelConsumption * 181
  );

  return { fuelCost, totalFuelConsumption };
}

export function calcServicingCost({
  servicingDuration,
  servicingCost,
  comparisonDuration,
  claimedRange,
  dailyTravelDistance,
  chargeCycle,
}) {
  //Get the battery life
  const batteryLife = calcBatteryLife({
    claimedRange,
    dailyTravelDistance,
    chargeCycle,
  });

  const servicingFrequency =
    ((comparisonDuration == "lifetime"
      ? batteryLife
      : Number(comparisonDuration)) *
      12) /
    Number(servicingDuration);

  return servicingFrequency * Number(servicingCost);
}

export function calcCo2Produced({ totalFuelConsumption, fuelVehicle }) {
  if (fuelVehicle == "diesel") {
    return Number(totalFuelConsumption) * 2.68;
  } else {
    return Number(totalFuelConsumption) * 2.3;
  }
}
