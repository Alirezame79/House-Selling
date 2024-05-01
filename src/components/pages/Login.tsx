import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";
import Input from "../widget/Input";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAppDispatch } from "../../store/hooks";
import { setProfile } from "../../store/slices/profile";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  function submitClicked(e: any) {
    e.preventDefault();

    if (emailRef?.current?.value === "" || passwordRef?.current?.value === "") {
      toast.error("تمام فیلدها را پر کنید.");
      return;
    }

    axios
      .post("http://localhost:3001/users/" + emailRef?.current?.value, {
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          dispatch(setProfile(true));
          localStorage.setItem("login", "1");
          toast.success("حساب کاربری با موفقیت ساخته شد.");
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="p-20 w-3/4 m-auto">
      <Toaster />
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">ورود</h1>
      <form
        className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4"
        onSubmit={submitClicked}
      >
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="phone">ایمیل</label>
          <Input className="text-left" innerRef={emailRef} type="email" />
        </div>
        <div className="flex flex-col gap-2 pb-7 w-1/2 m-auto">
          <label htmlFor="address">رمز عبور</label>
          <Input className="text-left" innerRef={passwordRef} type="password" />
        </div>
        <Button className="w-1/3 m-auto" onClick={submitClicked}>
          تایید
        </Button>
      </form>
      <p
        className="p-1 text-center w-fit m-auto text-amber-950 hover:text-amber-800 cursor-pointer"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        هنوز حساب کاربری ندارم
      </p>
    </div>
  );
}
