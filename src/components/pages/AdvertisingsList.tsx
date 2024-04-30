import { useEffect, useState } from "react";
import Advertising from "../cards/Advertising";
import axios from "axios";
import { advertising } from "../../types/advertising";

export default function AdvertisingsList() {
  const [advertisings, setAdvertisings] = useState<advertising[]>();

  useEffect(() => {
    axios
      .get("http://localhost:3001/advertisings")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setAdvertisings(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:p-2 p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start">
      {advertisings?.map((eachAdvertising) => {
        return (
          <Advertising key={eachAdvertising.id} click data={eachAdvertising} />
        );
      })}
    </div>
  );
}
