import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";
import { useAppSelector } from "../../store/hooks";

export default function Header() {
  const navigate = useNavigate();
  const profile = useAppSelector((state) => {
    return state.profile;
  })

  return (
    <div className="bg-amber-200 md:py-4 md:px-6 py-2 px-3 flex items-center justify-between">
      <h1 className="md:text-xl text-sm cursor-pointer" onClick={() => {navigate("/")}}>سامانه ثبت آگهی فروش مسکن</h1>
      {profile
       ? <div className="flex gap-10">
            <Button className="text-base py-1.5" onClick={() => {navigate("/add-advertising/")}}>ساخت آگهی جدید</Button>
            <svg className="w-12 p-0.5 border-2 border-black rounded-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs>
              <title/><g data-name="Layer 19" id="Layer_19"><path className="cls-1" d="M16,17a8,8,0,1,1,8-8A8,8,0,0,1,16,17ZM16,3a6,6,0,1,0,6,6A6,6,0,0,0,16,3Z"/>
              <path className="cls-1" d="M23,31H9a5,5,0,0,1-5-5V22a1,1,0,0,1,.49-.86l5-3a1,1,0,0,1,1,1.72L6,22.57V26a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V22.57l-4.51-2.71a1,1,0,1,1,1-1.72l5,3A1,1,0,0,1,28,22v4A5,5,0,0,1,23,31Z"/></g></svg>
          </div>
       : <Button className="w-40" onClick={() => {navigate("/login")}}>ثبت نام / ورود</Button>}
    </div>
  )
}