import { useRef, useState } from "react";
import Button from "../widget/Button";
import Input from "../widget/Input";
import Leaflet from "../widget/Leaflet";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddAdvertising() {
  const navigate = useNavigate();
  const phoneRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();
  const [lat, setLat] = useState(35.743918);
  const [lng, setLng] = useState(51.251342);

  function submitClicked(e: any) {
    e.preventDefault();

    if (phoneRef?.current?.value === "" || addressRef?.current?.value === "") {
      toast.error("فیلدهای شماره همراه و آدرس نمیتوانند خالی بمانند!");
      return;
    }

    axios
      .post("http://localhost:3001/advertisings/", {
        phone: phoneRef?.current?.value,
        address: addressRef?.current?.value,
        description: descriptionRef?.current?.value,
        location: [lat, lng],
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          toast.success("آگهی با موفقیت ثبت شد.");
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // get data from child
  function getNewPosition(data1: any, data2: any) {
    // console.log(data1);
    setLat(data1);
    // console.log(data2);
    setLng(data2);
  }

  return (
    <div className="p-20">
      <Toaster />
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">
        افزودن آگهی جدید
      </h1>
      <form
        className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4"
        onSubmit={submitClicked}
      >
        <div className="flex flex-col gap-2 w-1/3 m-auto">
          <label htmlFor="phone">شماره همراه</label>
          <Input
            className="text-left"
            innerRef={phoneRef}
            type="tel"
            placeholder="09XX XXX XXXX"
          />
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label htmlFor="address">آدرس</label>
          <Input
            type="text"
            innerRef={addressRef}
            placeholder="مثال: تهران - کمیل - خیابان افتکاری - کوچه علیمردانی - پلاک ۱۷ - طبقه ۳ - واحد ۲"
          />
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label htmlFor="description">توضیحات</label>
          <Input
            textArea
            type="text"
            innerRef={descriptionRef}
            placeholder="مثال: تازه ساز (حدود سه سال) - دارای دو سرویس بهداشتی و یک حمام - همینطور دو اتاق خواب و ..."
          />
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label className="text-center" htmlFor="map">
            با نشانگر روی نقشه مشخص کنید
          </label>
          <Leaflet
            location={[35.743918, 51.251342]}
            newPosition={getNewPosition}
            draggable={true}
          />
        </div>
        <Button className="w-1/4 m-auto" onclick={submitClicked}>
          ثبت آگهی
        </Button>
      </form>
    </div>
  );
}
