import Button from "../widget/Button";
import Input from "../widget/Input";
import Leaflet from "../widget/Leaflet";

export default function AddAdvertising() {

  return (
    <div className="p-20">
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">افزودن آگهی جدید</h1>
      <form className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4">
        <div className="flex flex-col gap-2 w-1/3 m-auto">
          <label htmlFor="phone">شماره همراه</label>
          <Input className="text-left" type="tel" placeholder="09XX XXX XXXX"/>
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label htmlFor="address">آدرس</label>
          <Input type="text" placeholder="مثال: تهران - کمیل - خیابان افتکاری - کوچه علیمردانی - پلاک ۱۷ - طبقه ۳ - واحد ۲"/>
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label htmlFor="description">توضیحات</label>
          <Input textArea type="text" placeholder="مثال: تازه ساز (حدود سه سال) - دارای دو سرویس بهداشتی و یک حمام - همینطور دو اتاق خواب و ..."/>
        </div>
        <div className="flex flex-col gap-2 p-5 w-full m-auto">
          <label className="text-center" htmlFor="map">با نشانگر روی نقشه مشخص کنید</label>
          <Leaflet location={[35.743918, 51.251342]} draggable={true}/>
        </div>
        <Button className="w-1/4 m-auto">ثبت آگهی</Button>
      </form>
    </div>
  )
}