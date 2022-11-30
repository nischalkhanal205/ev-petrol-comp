function calcFuelCost({
  dailyTravelDistance,
  mileage,
  fuelVehicle,
  comparisonDuration,
}) {
  //calc per day consumption (-12 to match real life mileage)
  const perDayConsumption = dailyTravelDistance / (mileage - 12);

  const totalFuelConsumption = perDayConsumption * comparisonDuration;

  //diesel = 178/litre (28 Nov, 2022)
  //petrol = 181/litre (28 Nov, 2022)
  let fuelCost;
  if (fuelVehicle == "diesel") {
    fuelCost = totalFuelConsumption * 178;
  } else {
    fuelCost = totalFuelConsumption * 181;
  }

  return { fuelCost, totalFuelConsumption };
}

function calcServicingCost({
  servicingDuration,
  servicingCost,
  comparisonDuration,
}) {
  const servicingFrequency = (comparisonDuration * 12) / servicingDuration;

  return servicingFrequency * servicingCost;
}

function calcCo2Produced({ fuelConsumed, fuelVehicle }) {
  if (fuelVehicle == "diesel") {
    return fuelConsumed * 2.68;
  } else {
    return fuelConsumed * 2.3;
  }
}
