import React from "react";
import Head from "next/head";
import flightData from "../flights.json";
import Itinerary from "../components/itinerary";
import Link from "next/link";

export default function Results() {
  function detailedLegs(legs) {
    const result = [];
    for (let leg of legs) {
      for (let details of flightData.legs) {
        if (leg === details.id) {
          result.push(details);
        }
      }
    }
    return result;
  }
  return (
    <div className="bg-sky-pattern">
      <div className="flex flex-row justify-between px-5 py-2">
        <h1 className="text-3xl text-gray-700 font-bold">Flights</h1>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 cursor-pointer"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
      </div>
      <Head>
        <title>Flights</title>
      </Head>
      {flightData.itineraries.map((trip, id) => {
        const legsInfo = detailedLegs(trip.legs);
        return (
          <div className="p-10">
            <Itinerary
              key={id}
              price={trip.price}
              legs={legsInfo}
              agent={trip.agent}
            ></Itinerary>
          </div>
        );
      })}
    </div>
  );
}
