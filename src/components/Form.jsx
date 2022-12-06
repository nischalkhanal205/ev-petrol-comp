import React, { useContext } from "react";
import { FormContext } from "../state/formContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { compareVehicles } from "../services/compareVehicles";

export default function Form() {
  const [formState, setFormState] = useContext(FormContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formState });

  const onSubmit = (data) => {
    setFormState(data);

    const result = compareVehicles(data);

    navigate("/result", { state: { result, data } });
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container space-y-8 divide-y divide-gray-300 bg-white shadow sm:rounded-lg p-10"
      >
        <div className="space-y-8 divide-y divide-gray-300 sm:space-y-5  ">
          <div>
            <h3 className="text-xl leading-6 font-medium text-gray-900 pt-5">
              Basic Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Enter all the details related to your EV which you want to compare
              with Petrol/Diesel vehicle.
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
                  {...register("dailyTravelDistance", {
                    required: "Required",
                    min: {
                      value: 5,
                      message: "Minimum travel distance is 5",
                    },
                  })}
                  className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-gray-500 sm:text-sm">Km</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-red-600 ">
                {errors.dailyTravelDistance?.message}
              </p>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Comparison Duration
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                <div className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <select
                    {...register("comparisonDuration")}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="lifetime">
                      Lifetime (As long as EV's Battery Lasts)
                    </option>
                    <option value="5">For 5 Years</option>
                    <option value="10">For 10 Years</option>
                    <option value="15">For 15 Years</option>
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
                compare with Petrol/Diesel vehicle.
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
                      type="text"
                      {...register("evName")}
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
                      {...register("evInitialBuyingCost", {
                        required: "Required",
                      })}
                      type="number"
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
                  <p className="text-sm text-red-600 ">
                    {errors.evInitialBuyingCost?.message}
                  </p>
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
                          step="0.1"
                          {...register("motorPower", {
                            required: "Required",
                            min: {
                              value: 0.5,
                              message: "Minimum value is 0.5 KW",
                            },
                          })}
                          type="number"
                          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-gray-500 sm:text-sm">KW</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-red-600 ">
                        {errors.motorPower?.message}
                      </p>
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
                          type="number"
                          {...register("transportAndOtherCosts")}
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
                      type="number"
                      {...register("claimedRange", {
                        required: "Required",
                        min: {
                          value: 40,
                          message: "Minimum value is 40 KM/Charge",
                        },
                        max: {
                          value: 500,
                          message: "Maximum value is 500 KM/Charge",
                        },
                      })}
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
                  <p className="text-sm text-red-600 ">
                    {errors.claimedRange?.message}
                  </p>
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
                      type="number"
                      step="0.1"
                      {...register("batteryCapacity", {
                        required: "Required",
                      })}
                      className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">kWh</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-red-600 ">
                    {errors.batteryCapacity?.message}
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Battery Type
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="relative mt-1 rounded-md shadow-sm max-w-lg flex">
                    <div className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <select
                        {...register("chargeCycle")}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value={1500}> Li-ion </option>
                        <option value={2000}> LiFePO4 </option>
                        <option value={1000}> Other </option>
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
                        {...register("perUnitElectricityCharge")}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value={8.5}>Rs. 8.50</option>
                        <option value={9.5}>Rs. 9.50</option>
                        <option value={10.5}>Rs. 10.50</option>
                        <option value={11.5}>Rs. 11.50</option>
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
                Enter all the details related to your Petrol/Diesel vehicle
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
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <select
                            {...register("fuelVehicle")}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option value="petrol-2wheel">
                              Petrol (Bike / Scooter)
                            </option>
                            <option value="diesel">
                              Diesel (Car / 4 Wheeler)
                            </option>
                            <option value="petrol-4wheel"> Petrol (Car)</option>
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
                        {...register("fuelVehicleName")}
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
                        type="number"
                        {...register("fuelInitialBuyingCost", {
                          required: "Required",
                        })}
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">NRS</span>
                      </div>
                    </div>
                    <p className="   text-sm text-red-600">
                      {errors.fuelInitialBuyingCost?.message}
                    </p>
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
                        {...register("mileage", {
                          required: "Required",
                          min: { value: 10, message: "Minimum value is 10" },
                          max: { value: 100, message: "Maximum value is 100" },
                        })}
                        className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">
                          Km/Ltr.
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-red-600">
                      {errors.mileage?.message}
                    </p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
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
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          {...register("servicingDuration")}
                        >
                          <option value={2}>After Every 2 Months</option>
                          <option value={3}>After Every 3 Months</option>
                          <option value={4}>After Every 4 Months</option>
                          <option value={5}>After Every 5 Months</option>
                        </select>
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
                        type="number"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        {...register("servicingCost", {
                          required: "Required",
                          min: {
                            value: 500,
                            message: "Minimum servicing cost is 500",
                          },
                        })}
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 sm:text-sm">NRS</span>
                      </div>
                    </div>
                    <p className="text-sm text-red-600">
                      {errors.servicingCost?.message}
                    </p>
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
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Comparison
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
