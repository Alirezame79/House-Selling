import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { advertising } from "../../types/advertising";
import Leaflet from "../widget/Leaflet";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setValue } from "../../store/slices/advertising";

export default function ShowAdvertising() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const advertisingData = useAppSelector((state) => {
    return state.advertising;
  })

  useEffect(() => {
    axios.get("http://localhost:3001/advertisings/" + id + "/").then((response) => {
      console.log(response);
      console.log(id)
      if (response.status === 200) {
        dispatch(setValue(response.data));
      }
    });
  }, [id]);

  return (
    <div className="pt-20">
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">
        نمایش آگهی
      </h1>
      <div className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 py-4 px-8">
        <h2 className="text-xl text-center">
          آدرس: {advertisingData?.address}
        </h2>
        <h2 className="text-lg text-center">
          تلفن همراه: {advertisingData?.phone}
        </h2>
        <h2 className="text-center">توضیحات: {advertisingData?.description}</h2>
        <div>
          <h2 className="text-center p-2">موقعیت مکانی:</h2>
          <Leaflet location={advertisingData?.location} />
        </div>
      </div>
    </div>
  );
}
