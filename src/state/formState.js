export const initialFormState = {
  isImport: false,
  basicDetails: {
    dailyTravelDistance: 35,
    comparisionDuration: "Lifetime (As long as EV's Battery Lasts)",
  },
  evDetails: {
    vehicleName: "",
    initialBuyingCost: null,
    motorPower: null,
    transportAndOtherCosts: null,
    claimedRange: null,
    batteryCapacity: null,
    batteryChargeCycle: {
      cycle: 1500,
      type: "Li-ion",
    },
    perUnitElectricityCharge: 9.5,
  },
  fuelVehicleDetails: {
    vehicle: "",
    vehicleName: "",
    initialBuyingCost: null,
    mileage: 35,
    servicingCost: 2000,
    servicingDuration: "After Every 3 Months",
  },
};
