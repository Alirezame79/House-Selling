import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";
import Input from "../widget/Input";

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="p-20 w-3/4 m-auto">
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">ورود</h1>
      <form className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4">
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="phone">ایمیل</label>
          <Input className="text-left" type="email"/>
        </div>
        <div className="flex flex-col gap-2 pb-7 w-1/2 m-auto">
          <label htmlFor="address">رمز عبور</label>
          <Input className="text-left" type="password"/>
        </div>
        <Button className="w-1/3 m-auto">تایید</Button>
      </form>
      <p className="p-1 text-center w-fit m-auto text-amber-950 hover:text-amber-800 cursor-pointer" onClick={() => {navigate("/sign-up")}}>هنوز حساب کاربری ندارم</p>
    </div>
  )
}