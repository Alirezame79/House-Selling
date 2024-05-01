import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Leaflet from "../widget/Leaflet";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setValue } from "../../store/slices/advertising";
import ReactModal from "react-modal";
import Button from "../widget/Button";
import Input from "../widget/Input";

export default function ShowAdvertising() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const advertisingData = useAppSelector((state) => {
    return state.advertising;
  });
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const navigate = useNavigate();
  const phoneRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();
  const [lat, setLat] = useState(35.743918);
  const [lng, setLng] = useState(51.251342);

  useEffect(() => {
    axios
      .get("http://localhost:3001/advertisings/" + id + "/")
      .then((response) => {
        console.log(response);
        console.log(id);
        if (response.status === 200) {
          dispatch(setValue(response.data));
        }
      });
  }, [id]);

  const deleteCustomStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
    },
  };

  function getNewPosition(data1: any, data2: any) {
    // console.log(data1);
    setLat(data1);
    // console.log(data2);
    setLng(data2);
  }

  function editClicked() {
    axios
      .put("http://localhost:3001/advertisings/" + advertisingData?.id, {
        phone: phoneRef?.current?.value,
        address: addressRef?.current?.value,
        description: descriptionRef?.current?.value,
        location: [lat, lng],
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="pt-20 -z-10">
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
          {!deleteModalVisibility && (
            <Leaflet location={advertisingData?.location} />
          )}
        </div>
        <div className="flex justify-around w-1/3 m-auto bg-amber-200 p-1 rounded-lg items-center">
          <>
            <svg
              viewBox="0 0 24 24"
              className="w-14 cursor-pointer p-1"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setEditModalVisibility(true);
              }}
            >
              <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z" />
              <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" />
            </svg>
          </>
          <p className="text-3xl">|</p>
          <>
            <svg
              viewBox="0 0 448 512"
              className="w-11 cursor-pointer p-1"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setDeleteModalVisibility(true);
              }}
            >
              <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
            </svg>
          </>
        </div>
      </div>

      {/* Edit Modal */}
      <ReactModal isOpen={editModalVisibility}>
        <h1 className="text-3xl text-center p-10 font-bold">ویرایش آگهی</h1>
        <form
          className="flex flex-col gap-8 bg-white shadow-md rounded w-full mx-auto my-2 p-4"
          onSubmit={editClicked}
        >
          <div className="flex flex-col gap-2 w-1/3 m-auto">
            <label htmlFor="phone">شماره همراه</label>
            <Input
              className="text-left"
              innerRef={phoneRef}
              type="tel"
              placeholder={advertisingData?.phone}
            />
          </div>
          <div className="flex flex-col gap-2 p-5 w-full m-auto">
            <label htmlFor="address">آدرس</label>
            <Input
              type="text"
              innerRef={addressRef}
              placeholder={advertisingData?.address}
            />
          </div>
          <div className="flex flex-col gap-2 p-5 w-full m-auto">
            <label htmlFor="description">توضیحات</label>
            <Input
              textArea
              type="text"
              innerRef={descriptionRef}
              placeholder={advertisingData?.description}
            />
          </div>
          <div className="flex flex-col gap-2 p-5 w-full m-auto">
            <label className="text-center" htmlFor="map">
              با نشانگر روی نقشه مشخص کنید
            </label>
            <Leaflet
              location={advertisingData?.location}
              newPosition={getNewPosition}
              draggable={true}
            />
          </div>
          <Button className="w-1/4 m-auto" onclick={editClicked}>
            ثبت آگهی
          </Button>
        </form>
      </ReactModal>

      {/* Delete Modal */}
      <ReactModal style={deleteCustomStyle} isOpen={deleteModalVisibility}>
        <p className="pb-14 text-center text-2xl">
          آیا از حذف آگهی اطمینان دارید؟
        </p>
        <div className="flex justify-around">
          <Button
            className="px-14"
            onClick={() => {
              axios
                .delete(
                  "http://localhost:3001/advertisings/" + advertisingData?.id
                )
                .then(function (response) {
                  console.log(response);
                  if (response.status === 200) {
                    navigate("/");
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            حذف
          </Button>
          <Button
            className="px-10 border-2 border-amber-300 bg-white"
            onClick={() => {
              setDeleteModalVisibility(false);
            }}
          >
            انصراف
          </Button>
        </div>
      </ReactModal>
    </div>
  );
}
