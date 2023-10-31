import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs"

import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser } from "../../redux/slices/user";
import { useEffect, useState } from "react";

import { ContainerSignup, Input,FormContainer,Form, TitleForm } from "./FormComponents";

function Login() {
  const { register, handleSubmit } = useForm();
  const { error, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const petPost = localStorage.getItem("petPost");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <ContainerSignup>
        <FormContainer className="relative">
          <TitleForm>Login Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => {
              dispatch(loginUser(data))
              .then(result => {
                dispatch(getUser())
                if(petPost) {navigate("/post")}
                else if(result.payload.token){
                  
                  navigate("/home")
                }
              })
            })}
          >
            <Input>
              <label htmlFor="">EMAIL</label>
              <input {...register("email")} placeholder="user@mail.com" />
            </Input>

            <Input>
              <label htmlFor="">PASSWORD</label>
              <div className="flex justify-between items-center border-[#f48fb1] border-[1px] rounded-[8px] ">

              <input className="border-none w-full p-0"
                {...register("password")}
                placeholder="******"
                type={showPassword ? 'text' : 'password'}
                />

                <button className="mt-0 border-none pr-2 text-gray-500" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (<BsEyeSlashFill size={24}/>): (<BsEyeFill size={24}/>)}
                </button>
              </div>
            </Input>

            <Button className = "mt-4 mx-auto" type="primary">{loading ? "Loading..." : "LOGIN"}</Button>
            
            {error && (<p style={{background:"#ccc",padding:"4px 8px", color:"red", textAlign: "center", marginTop: "8px"}}>{error}</p>)}
          </Form>
          <span className="absolute right-4 bottom-2 text-sm">
  Don&rsquo;t have an account? <Link to="/signup" className="text-[#1b74e4] font-semibold text-sm">
    Create one
  </Link>
</span>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Login;
