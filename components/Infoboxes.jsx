import React from "react";
import Infobox from "./Infobox";

const Infoboxes = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Infobox
              heading="for Renters"
              backgroundcolor="bg-grey-100"
              buttoninfo={{
                text: "For Renters",
                link: "Browse Property",
                backgroundcolor: "bg-grey",
              }}
              textcolor="text-grey-100"
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </Infobox>

            <Infobox
              heading="Property Owners"
              backgroundcolor="bg-blue-100"
              textcolor="text-black-100"
              buttoninfo={{
                text: "Add Property",
                link: "Add Propety",
                backgroundcolor: "bg-black",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </Infobox>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infoboxes;
