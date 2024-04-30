import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";
import Input from "../widget/Input";
import { useRef } from "react";

export default function SignUp() {
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>()

  return (
    <div className="p-20 w-3/4 m-auto">
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">ثبت نام</h1>
      <form className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4">
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="phone">نام کاربری</label>
          <Input className="text-left" type="text"/>
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="address">ایمیل</label>
          <Input className="text-left" type="email"/>
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="description">رمز عبور</label>
          <Input className="text-left" type="password" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="description">تکرار رمز عبور</label>
          <Input className="text-left" type="password" />
        </div>
        <Button className="w-1/3 m-auto">تایید</Button>
      </form>
      <p className="p-1 text-center w-fit m-auto text-amber-950 hover:text-amber-800 cursor-pointer" onClick={() => {navigate("/login")}}>حساب کاربری دارم</p>
    </div>
  )
}