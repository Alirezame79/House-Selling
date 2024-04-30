import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-200 md:py-6 md:px-9 py-3 px-5 flex items-center justify-between">
      <h1 className="md:text-xl text-sm cursor-pointer" onClick={() => {navigate("/")}}>سامانه ثبت آگهی فروش مسکن</h1>
      <Button className="w-40" onClick={() => {navigate("/login")}}>ثبت نام / ورود</Button>
    </div>
  )
}