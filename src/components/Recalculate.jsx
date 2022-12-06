import { RWebShare } from "react-web-share";
export default function Recalculate() {
  return (
    <div className="bg-gray-50 mt-10">
      <div className="mx-auto max-w-7xl    px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Calculate Again ?</span>
          <span className="block text-indigo-600">
            Share it to spread this information among others too !
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Re-Calculate
            </a>
          </div>
          <RWebShare
            data={{
              text: "Compare total cost of Fuel Vehicle with Electric Vehicles",
              url: "https://evfuel-comparison.netlify.app/",
              title: "EV VS Fuel - Cost Comparison",
            }}
          >
            <div className="ml-3 inline-flex rounded-md shadow">
              <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Share
              </a>
            </div>
          </RWebShare>
        </div>
      </div>
    </div>
  );
}
