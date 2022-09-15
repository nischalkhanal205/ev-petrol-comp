import React, { useState, useContext } from "react";
import { FormContext } from "../state/formContext";

export default function Form() {
  const [formState, setFormState] = useContext(FormContext);

  const handleChange = (e) => {
    const changeState = (obj, key) => {
      setFormState((prevState) => ({
        ...prevState,
        [obj]: {
          ...prevState.obj,
          [key]: e.target.value,
        },
      }));
    };

    //change state according to change in form
    switch (e.target.name) {
      case "dailyTravelDistance":
        changeState("basicDetails", "dailyTravelDistance");
      case "comparisionDuration":
        changeState("basicDetails", "comparisionDuration");
      case "evVehicleName":
        changeState("evDetails", "vehicleName");
      case "evInitialBuyingCost":
        changeState("evDetails", "initialBuyingCost");
      case "motorPower":
        changeState("evDetails", "motorPower");
      case "transportAndOtherCosts":
        changeState("evDetails", "transportAndOtherCosts");
      case "claimedRange":
        changeState("evDetails", "claimedRange");
      case "batteryCapacity":
        changeState("evDetails", "batteryCapacity");
      case "batteryChargeCycle":
        setFormState((prevState) => ({
          ...prevState,
          evDetails: {
            ...prevState.evDetails,
            batteryChargeCycle: {
              ...prevState.basicDetails.batteryChargeCycle,
              cycle: e.target.value,
            },
          },
        }));
      case "batteyType":
        setFormState((prevState) => ({
          ...prevState,
          evDetails: {
            ...prevState.evDetails,
            batteryChargeCycle: {
              ...prevState.basicDetails.batteryChargeCycle,
              type: e.target.value,
            },
          },
        }));
      case "perUnitElectricityCharge":
        changeState("evDetails", "perUnitElectricityCharge");
      case "vehicleType":
        console.log(e);
        changeState("fuelVehicleDetails", "vehicle");
      case "fuelVehicleName":
        changeState("fuelVehicleDetails", "vehicleName");
      case "fuelInitialBuyingCost":
        changeState("fuelVehicleDetails", "initialBuyingCost");
      case "mileage":
        changeState("fuelVehicleDetails", "mileage");
      case "servicingCost":
        changeState("fuelVehicleDetails", "servicingCost");
      case "servicingDuration":
        changeState("fuelVehicleDetails", "servicingDuration");
      default:
        return formState;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div className="flex justify-center ">
      <form className="container space-y-8 divide-y divide-gray-300 bg-white shadow sm:rounded-lg p-5">
        <div className="space-y-8 divide-y divide-gray-300 sm:space-y-5">
          <div>
            <h3 className="text-xl leading-6 font-medium text-gray-900 pt-5">
              Basic Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Enter all the details related to your EV which you want to compare
              with Petrol/Deisel vehicle.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Daily Travel Distance
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                <input
                  type="number"
                  name="dailyTravelDistance"
                  value={formState.basicDetails.dailyTravelDistance}
                  min="5" 
                  max="499"
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-gray-500 sm:text-sm">Km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Comparision Duration
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                <div className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <select
                    name="comparisionDuration"
                    value={formState.basicDetails.comparisionDuration}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue="Canada"
                  >
                    <option>Lifetime (As long as EV's Battery Lasts)</option>
                    <option>For 5 Years</option>
                    <option>For 10 Years</option>
                    <option>For 15 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900 pt-5">
                EV Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Enter all the details related to your EV which you want to
                compare with Petrol/Deisel vehicle.
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Vehicle Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      value={formState.evDetails.vehicleName}
                      type="text"
                      name="evVehicleName"
                      id="evVehicleName"
                      autoComplete="name"
                      className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Initial Buying Cost
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-md">
                        {formState.isImport ? "₹" : "रु"}
                      </span>
                    </div>
                    <input
                      value={formState.evDetails.initialBuyingCost}
                      type="number"
                      name="evInitialBuyingCost"
                      id="evInitialBuyingCost"
                      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option> {formState.isImport ? "INR" : "NRS"}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {formState.isImport && (
                <div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Motor Power
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                        <input
                          value={formState.evDetails.motorPower}
                          type="text"
                          name="motorPower"
                          id="motorPower"
                          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-gray-500 sm:text-sm">KW</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Transport & Other Costs
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-md">रु</span>
                        </div>
                        <input
                          value={formState.evDetails.transportAndOtherCosts}
                          type="text"
                          name="transportAndOtherCosts"
                          id="transportAndOtherCosts"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option> NRS </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Claimed Range
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <input
                      value={formState.evDetails.claimedRange}
                      type="number"
                      name="claimedRange"
                      id="claimedRange"

                      max="500"
                      className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">
                          KM/Charge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Battery Capacity
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <input
                      value={formState.evDetails.batteryCapacity}
                      type="text"
                      name="batteryCapacity"
                      id="batteryCapacity"
                      className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">KwH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Battery Charge Cycle
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <input
                      type="text"
                      name="batteryChargeCycle"
                      value={formState.evDetails.batteryChargeCycle.cycle}
                      id="batteryChargeCycle"
                      className=" block w-full rounded-md border-gray-300  pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Battery
                      </label>
                      <select
                        id="batteyType"
                        name="batteyType"
                        value={formState.evDetails.batteryChargeCycle.type}
                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option> Li-ion </option>
                        <option> LiFePO4 </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Per Unit Electricity Charge
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <div className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <select
                        value={formState.evDetails.perUnitElectricityCharge}
                        id="perUnitElectricityCharge"
                        name="perUnitElectricityCharge"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        defaultValue="Canada"
                      >
                        <option>Rs. 8.50</option>
                        <option>Rs. 9.50</option>
                        <option>Rs. 11.50</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900">
                Petrol / Diesel Vehicle
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Enter all the details related to your Petrol/Deisel vehicle
                which you want to compare with EV.
              </p>
            </div>
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline pb-5">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                      id="label-notifications"
                    >
                      Vehicle
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                      <p className="text-sm text-gray-500">
                        Choose your vehicle type according to the fuel engine
                      </p>
                      <div
                        className="mt-4 space-y-4"
                        >
                        
                         <div className="flex items-center">
                          <select
                           onChange={handleChange}
                           value={formState.fuelVehicleDetails.vehicle}
                            id="push-everything"
                            name="vehicleType"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option> Petrol (Bike / Scooter)</option>
                            <option> Diesel (Car / 4 Wheeler)</option>
                            <option>  Petrol (Car)</option>
                          </select>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Vehicle Name
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="fuelVehicleName"
                        id="fuelVehicleName"
                        autoComplete="name"
                        className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Initial Buying Cost
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">रु</span>
                      </div>
                      <input
                        type="text"
                        name="fuelInitialBuyingCost"
                        id="fuelInitialBuyingCost"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">NRS</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Mileage
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                      <input
                        type="number"
                        name="mileage"
                        id="mileage"
                        value={35}
                        className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">
                          Km/Ltr.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Vehicle Servicing Cost
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-md">रु</span>
                      </div>
                      <input
                        type="text"
                        name="servicingCost"
                        id="servicingCost"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                        value={2000}
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">NRS</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Servicing Duration
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                      <div className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <select
                          id="servicingDuration"
                          name="servicingDuration"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          defaultValue="Canada"
                        >
                          <option>After Every 2 Months</option>
                          <option>After Every 3 Months</option>
                          <option>After Every 4 Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleClick}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Comparision
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
