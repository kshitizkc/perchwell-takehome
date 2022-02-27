import React, { ChangeEvent, useEffect, useState } from "react";
import { ListingCard } from "../../common";
import data from "./data.json";

interface ListingProps {
  id: number;
}

export default function Listings() {
  const [selectedOption, setSelectedOption] = useState(0);
  // using any type for the time being
  // TODO: create interface and assign the interface as type
  const [listings, setListings] = useState<any>([]);

  // TODO: use this after CORS issue is resolved
  //
  // useEffect(() => {
  //   fetch(
  //     "https://staging.perchwell.com/api/feeds/sothebys_international_realty",
  //     {
  //       headers: {
  //         Authorization: "Qs7MGQchX2DUZ9BX8wYpjjgM",
  //         // Accept: "application/json",
  //         // "Content-Type": "application/json",
  //         // "Access-Control-Allow-Methods": "GET",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) =>setListings(data.listings));
  // });

  useEffect(() => {
    setListings(data.listings);
  }, []);

  const handleSelectChange = (e: ChangeEvent) => {
    setSelectedOption((e.target as any).value);
  };
  return (
    <div>
      {/* HERO IMAGE SECTION */}
      <div className="w-full h-[1080px] flex flex-row justify-between items-center  bg-[url('src/assets/images/hero-image.svg')] bg-opacity-30">
        {/* I do not have to export the image only from Figma. 
        For the time being I am commenting this and can be uncommented later upon getting the required image*/}

        {/* <div className="m-auto font-opensans text-white font-semibold tracking-wide">
          Find a home that suits your lifestyle.
        </div> */}
      </div>

      {/* LISTINGS SECTION */}
      <div className="p-6">
        {/* SORTING SECTION*/}
        <div className="mb-6">
          Sort By:
          <select
            onChange={(e) => {
              handleSelectChange(e);
            }}
            value={selectedOption}
            className="text-gray-600"
          >
            <option>Most Expensive</option>
            <option>Cheapest First</option>
          </select>
        </div>
        {/* LISTINGS */}
        <div className="grid grid-cols-3 gap-8">
          {listings?.map((listing: ListingProps) => {
            return <ListingCard key={listing.id} listing={listing} />;
          })}
        </div>
      </div>

      {/* Pagination */}
    </div>
  );
}
