import Leg from "../components/leg";

export default function Itinerary(props) {
  //   console.log(props);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex min-w-min max-w-4xl flex-wrap">
      <div className="flex flex-row flex-wrap">
        <div className="px-12 border-r-2 border-fuchsia-600">
          <Leg leg={props.legs[0]}></Leg>
        </div>
        <div className="px-12 border-r-2 border-fuchsia-600">
          <Leg leg={props.legs[1]}></Leg>
        </div>
      </div>
      <div className="flex flex-col items-baseline text-lg pl-12 py-4">
        <div className="text-4xl pb-8 text-green-600">
          <p>{props.price}</p>
        </div>
        <p className="pb-10 text-2xl text-gray-600">{props.agent}</p>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Select
        </button>
      </div>
    </div>
  );
}
