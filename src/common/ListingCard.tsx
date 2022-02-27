import React from "react";
import ListingRibbon from "./ListingRibbon";
import formatCurrency from "./utils";

interface ListingProps {
  listing: any;
}

export default function ListingCard({ listing }: ListingProps) {
  return (
    <div
      className={" h-[328.81px] flex flex-col justify-between"}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.56%, rgba(0, 0, 0, 0.68) 100%),url(${listing.media.large_image_list[0]})`,
        backgroundSize: "contain",
      }}
    >
      {/* Ribbon Section */}
      <div>
        <ListingRibbon label={listing.listing_details.status} color="#002349" />
        {listing.open_houses && (
          <ListingRibbon
            label={listing.open_houses[0]?.start_time}
            color="#001731"
          />
        )}
        {listing.features.new_development && (
          <ListingRibbon label="New Development" color="#000000" />
        )}
      </div>

      {/* Stats Section */}
      <div className="flex flex-row justify-between items-end">
        {/* STATS */}
        <div className="flex flex-col text-white p-4 gap-y-2 ">
          <div
            className="font-opensans text-[28px] leading-[34px]"
            dangerouslySetInnerHTML={{
              __html: listing.location.address_with_unit,
            }}
          ></div>
          <div className="flex flex-row">
            <div className="text-[17px] leading-[22px] font-opensans">
              {formatCurrency(Number(listing.listing_details.current_price))} /
              mo
            </div>
            <div className="ml-2 flex flex-row gap-x-2 font-abeezee text-[13px]">
              <div>{listing.unit_details.beds} BD</div>
              <span className="border-r my-[2px]"></span>
              <div>{listing.unit_details.full_baths} BA</div>

              {listing.unit_details.sqft && (
                <>
                  <span className="border-r my-[2px] "></span>
                  <div>{listing.unit_details.sqft} SQFT </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-row leading-[16px]">
            <div>{listing.location.place}</div>
            <div className="ml-2">{listing.unit_details.property_type}</div>
          </div>
        </div>
        <span className="mr-4 mb-4 border border-white rounded-full w-10 h-10 flex flex-col justify-center items-center">
          <img
            src="src/assets/images/floor_plan_icon.svg"
            alt="floor-plan-icon"
          />
        </span>
      </div>
      {/* floor plan */}
    </div>
  );
}
