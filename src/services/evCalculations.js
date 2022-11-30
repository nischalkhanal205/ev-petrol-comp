const TAX = 0.28;

function calcImportCost({ initialCost, otherCost, motorPower }) {
  let priceAfterTax;
  if (motorPower < 100) {
    priceAfterTax = TAX * initialCost + initialCost;
  } else if (motorPower >= 100 && motorPower <= 200) {
    priceAfterTax = (TAX + 0.3) * initialCost + initialCost;
  } else if (motorPower >= 201 && motorPower <= 300) {
    priceAfterTax = (TAX + 0.45) * initialCost + initialCost;
  } else {
    priceAfterTax = (TAX + 0.6) * initialCost + initialCost;
  }
  return priceAfterTax + otherCost;
}

function calcChargeCost({
  perUnitPrice,
  batteryCapacity,
  comparisonDuration,
  dailyTravelDistance,
  claimedRange,
  chargeCycle,
}) {
  const costPerCharge = Math.round(perUnitPrice * batteryCapacity);
  if (comparisonDuration === "lifetime") {
    //calc battery life

    //calc charge frequency (-35 to match real life range)
    const chargeFrequency = Math.floor(
      (claimedRange - 35) / dailyTravelDistance
    );

    //calc battery life (-2 to match real life of battery)
    const batteryLife = Math.floor((chargeFrequency * chargeCycle) / 365 - 2);

    const totalCost = batteryLife * 365 * costPerCharge;

    return { batteryLife, totalCost };
  } else if (comparisonDuration === 5) {
    return 5 * 365 * costPerCharge;
  } else {
    return 10 * 365 * costPerCharge;
  }
}

calcChargeCost(9.5, 4.6, 5);
