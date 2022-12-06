import { useState } from "react";
import {
  CurrencyRupeeIcon,
  TruckIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import StatsTable from "./StatsTable";
import Recalculate from "./Recalculate";

export default function StatsBox({ result, data }) {
  const [showDetails, setshowDetails] = useState(true);
  const handleShowDetails = (id) => {
    setshowDetails(!showDetails);
  };

  const stats = [
    {
      id: 1,
      name: "EV Cost",
      stat: `RS. ${result.evCost}`,
      icon: LightningBoltIcon,
      change: "122",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Fuel Vehicle Cost",
      stat: `Rs. ${result.fuelVehicleCost}`,
      icon: TruckIcon,
      change: "5.4%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Total Money Saved",
      stat: `Rs. ${result.saving}`,
      icon: CurrencyRupeeIcon,
      change: "3.2%",
      changeType: "decrease",
    },
  ];

  return (
    <div className="m-10">
      <h3 className="text-2xl p-8 text-center leading-6 font-bold text-gray-900">
        Final Comparison Between
        <span className="text-green-700 ">
          {" "}
          {data.evName ? data.evName : "EV"}{" "}
        </span>{" "}
        and
        <span className="text-indigo-700 ">
          {" "}
          {data.fuelVehicleName ? data.fuelVehicleName : "Fuel Vehicle"}{" "}
        </span>
      </h3>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Comparison Duration:{"  "}
        {data.comparisonDuration == "lifetime"
          ? result.batteryLife
          : data.comparisonDuration}{" "}
        Years
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div
                className={` ${
                  item.id == 1
                    ? "bg-purple-600"
                    : item.id == 2
                    ? "bg-red-600"
                    : "bg-green-600"
                } absolute rounded-md p-3`}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>

              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    onClick={() => handleShowDetails(item.id)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Show Details
                    <span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>

      {showDetails && <StatsTable details={result} />}
      <Recalculate />
    </div>
  );
}
