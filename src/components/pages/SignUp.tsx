import { useNavigate } from "react-router-dom";
import Button from "../widget/Button";
import Input from "../widget/Input";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAppDispatch } from "../../store/hooks";
import { setProfile } from "../../store/slices/profile";

export default function SignUp() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  function submitClicked(e: any) {
    e.preventDefault();

    if (
      usernameRef?.current?.value === "" ||
      emailRef?.current?.value === "" ||
      passwordRef?.current?.value === "" ||
      passwordConfirmRef?.current?.value === ""
    ) {
      toast.error("تمام فیلدها را پر کنید.");
      return;
    }

    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value) {
      toast.error("رمزهای عبور وارد شده مغایرت دارند!");
      return;
    }

    axios
      .post("http://localhost:3001/users/", {
        username: usernameRef?.current?.value,
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
      <h1 className="text-center font-bold text-3xl p-7 text-gray-900">
        ثبت نام
      </h1>
      <form
        className="flex flex-col gap-8 bg-white shadow-md rounded w-2/3 mx-auto my-2 p-4"
        onSubmit={submitClicked}
      >
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="phone">نام کاربری</label>
          <Input className="text-left" innerRef={usernameRef} type="text" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="address">ایمیل</label>
          <Input className="text-left" innerRef={emailRef} type="email" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="description">رمز عبور</label>
          <Input className="text-left" innerRef={passwordRef} type="password" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 m-auto">
          <label htmlFor="description">تکرار رمز عبور</label>
          <Input
            className="text-left"
            innerRef={passwordConfirmRef}
            type="password"
          />
        </div>
        <Button className="w-1/3 m-auto" onClick={submitClicked}>
          تایید
        </Button>
      </form>
      <p
        className="p-1 text-center w-fit m-auto text-amber-950 hover:text-amber-800 cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      >
        حساب کاربری دارم
      </p>
    </div>
  );
}
