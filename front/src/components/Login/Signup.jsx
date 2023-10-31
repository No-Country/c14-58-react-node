import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser } from "../../redux/slices/user";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { ContainerSignup, Input,FormContainer,Form, TitleForm } from "./FormComponents";

function Signup() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);
  const { register, handleSubmit } = useForm();
  const { loading } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <ContainerSignup>
        <FormContainer className="relative">
          <TitleForm>Create your Account</TitleForm>
          <Form
            onSubmit={handleSubmit((data) => {
              dispatch(createUser(data)).then((result) => {
                dispatch(getUser());
                if (result.payload.token) {
                  navigate("/home");
                }
              });
            })}
          >
            <Input>
              <label htmlFor="">FIRST NAME</label>
              <input {...register("first_name")} placeholder="John" />
            </Input>
            <Input>
              <label htmlFor="">SURNAME</label>
              <input {...register("surname")} placeholder="Doe" />
            </Input>
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



            <Button className = "mt-4 mx-auto" type="primary">
              {loading ? "Loading..." : "CREATE ACCOUNT"}
            </Button>
            {error && (<p style={{background:"#ccc",padding:"4px 8px", color:"red", textAlign: "center", marginTop: "8px"}}>{error}</p>)}

          </Form>
          <span className="absolute right-4 bottom-2 text-sm">
            Already have an account? <Link to="/login" className="text-[#1b74e4] font-semibold text-sm">
                        Login here
                      </Link>
          </span>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}

export default Signup;
