import Image from "next/image";

export default function leg(props) {
  const airlineId = props.leg.airline_id;
  const arrival = props.leg.arrival_airport;
  const arrivalTime = props.leg.arrival_time.slice(-5);
  const airlineName = props.leg.airline_name;
  const departure = props.leg.departure_airport;
  const departureTime = props.leg.departure_time.slice(-5);
  const time = props.leg.duration_mins;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const stops = props.leg.stops;
  return (
    <div className="text-xl">
      {/* could not get image to scale properly */}
      <Image
        className="object-cover scale-50"
        src={`https://logos.skyscnr.com/images/airlines/favicon/${airlineId}.png`}
        width={50}
        height={50}
      />
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col text-3xl">
            <span className="text-gray-700">{departureTime}</span>
            <span className="py-4 text-gray-700">{departure}</span>
          </div>
          <div className="px-6 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="flex flex-col text-3xl">
            <span className="text-gray-700">{arrivalTime}</span>
            <span className="py-4 text-gray-700">{arrival}</span>
          </div>
        </div>
        <div className="pl-16">
          <span className="text-gray-700">{`${hours}h ${minutes}`}</span>
          <span>
            {stops === 0 ? (
              <div className="text-green-500 pt-2">Direct</div>
            ) : (
              <div className="text-red-500 pt-2">{stops} stop</div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
