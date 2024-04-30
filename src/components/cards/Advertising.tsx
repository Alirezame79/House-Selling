import { useNavigate } from "react-router-dom";

export default function Advertising({ data }: any) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-amber-100 hover:bg-amber-50 hover:border-amber-100 cursor-pointer md:shadow-lg shadow-md md:m-2 m-1 md:p-2 p-1.5 border-2 rounded-lg border-amber-200 flex flex-col md:gap-2 gap-1"
      onClick={() => {
        navigate("advertising/" + data.id + "/");
      }}
    >
      <h2 className="md:text-lg text-sm pr-2">{data.address}</h2>
    </div>
  );
}
