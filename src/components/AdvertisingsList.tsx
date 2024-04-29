import Advertising from "./cards/Advertising";

export default function AdvertisingsList() {

  return (
    <div className="md:p-2 p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start">
      <Advertising />
      <Advertising />
      <Advertising />
      <Advertising />
    </div>
  )
}