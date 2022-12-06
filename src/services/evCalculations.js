const TAX = 0.28;

export function calcImportCost({
  evInitialBuyingCost,
  transportAndOtherCosts,
  motorPower,
}) {
  //Change all strings to number for calculations
  evInitialBuyingCost = Number(evInitialBuyingCost) * 1.6;
  motorPower = Number(motorPower);

  let priceAfterTax;
  if (motorPower < 100) {
    priceAfterTax = TAX * evInitialBuyingCost + evInitialBuyingCost;
  } else if (motorPower >= 100 && motorPower <= 200) {
    priceAfterTax = (TAX + 0.3) * evInitialBuyingCost + evInitialBuyingCost;
  } else if (motorPower >= 201 && motorPower <= 300) {
    priceAfterTax = (TAX + 0.45) * evInitialBuyingCost + evInitialBuyingCost;
  } else {
    priceAfterTax = (TAX + 0.6) * evInitialBuyingCost + evInitialBuyingCost;
  }
  return Math.round(priceAfterTax + Number(transportAndOtherCosts));
}

export function calcBatteryLife({
  claimedRange,
  dailyTravelDistance,
  chargeCycle,
}) {
  //calc charge frequency (-35 to match real life range)
  const chargeFrequency = Math.floor(
    (Number(claimedRange) - 35) / Number(dailyTravelDistance)
  );

  //calc battery life (-2 to match real life of battery)
  return Math.floor((chargeFrequency * Number(chargeCycle)) / 365 - 2);
}

export function calcChargeCost({
  perUnitElectricityCharge,
  batteryCapacity,
  comparisonDuration,
  dailyTravelDistance,
  claimedRange,
  chargeCycle,
}) {
  //Covert required values to number for calculations
  dailyTravelDistance = Number(dailyTravelDistance);
  claimedRange = Number(claimedRange);
  chargeCycle = Number(chargeCycle);

  const costPerCharge = Math.round(
    Number(perUnitElectricityCharge) * Number(batteryCapacity)
  );

  // Get battery life
  const batteryLife = calcBatteryLife({
    claimedRange,
    dailyTravelDistance,
    chargeCycle,
  });

  if (comparisonDuration === "lifetime") {
    const totalCost = Math.round(chargeCycle * costPerCharge);
    return { batteryLife, totalCost, costPerCharge };
  } else {
    // batteryLife --> 1500
    // 5 --> (1500/batteryLife) * 5
    return {
      batteryLife,
      costPerCharge,
      totalCost: Math.round(
        (chargeCycle / batteryLife) * Number(comparisonDuration) * costPerCharge
      ),
    };
  }
}
