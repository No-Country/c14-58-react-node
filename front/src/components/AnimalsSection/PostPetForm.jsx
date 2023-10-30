import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPet } from "../../redux/slices/pets";
import { getUser } from "../../redux/slices/user";
import ImageInput from "../../ui/ImageInput";

const ContainerSignup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  color: #373737;
  gap: 4px;
  label {
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-align: left;
  }
  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #8e8e8e;
    padding: 8px;
    border-color: #f48fb1;
    border-radius: 8px;
  }
  textarea {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #8e8e8e;
    padding: 8px;
    border-color: #f48fb1;
    border-radius: 8px;
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  width: 200%;
  background-color: white;
  padding: 32px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    margin: 16px auto 0;
  }
`;

const TitleForm = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  margin-bottom: 50px;
`;

function PostPetForm() {
  const specieOptions = [
    { label: 'Choose a specie', value: '' },
    {label: "Cat", value: "cat"},
    {label: "Dog", value: "dog"},
  ]
  const genderOptions = [
    { label: 'Choose a gender', value: '' },
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
  ]
  const { control, register, handleSubmit, setValue } = useForm();
  const [characterCount, setCharacterCount] = useState(0);
  const { loading } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    setCharacterCount(text.length);
  };

  const handleFormSubmit = (data) => {
    if (!token) {
      console.log(data)
      localStorage.setItem('petPost', JSON.stringify(data))
      document.getElementById("my_modal_4").showModal();
    } else {
      dispatch(postPet(data)).then(() => {
        dispatch(getUser());
      });
      localStorage.removeItem('petPost')
      navigate("/home");
    }
  };
  useEffect(()=>{
    const storedPetData = JSON.parse(localStorage.getItem('petPost'));

    if (storedPetData) {
      setValue('title', storedPetData.title);
      setValue('description', storedPetData.description);
      setValue('status', storedPetData.status);
      setCharacterCount(storedPetData.description.length)
    }

  },[setValue])
  return (
    <>
      <ContainerSignup>
        <FormContainer>
          <TitleForm>Post your pet</TitleForm>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Input>
              <label htmlFor="title">Name</label>
              <input
                {...register("title")}
                id="title"
                placeholder="Enter a name"
              />
            </Input>

            <Input>
              <label htmlFor="description">
                Description (Max 150 characters)
              </label>
              <textarea
                {...register("description")}
                id="description"
                placeholder="Enter a description"
                maxLength="150"
                onChange={handleDescriptionChange}
                style={{ width: "100%", height: "250px" }}
              />
              <p className="text-end text-xs">Character Count: {characterCount}/150</p>
            </Input>

            <Input>
              <label>Choose Status:</label>
              <label>
                <input
                  type="radio"
                  {...register("status")}
                  value="found"
                  id="status-option1"
                />
                Found
              </label>
              <label>
                <input
                  type="radio"
                  {...register("status")}
                  value="lost"
                  id="status-option2"
                />
                Lost
              </label>
            </Input>
            <div className="flex gap-6">

              <Input className="w-full">
                <label>Choose Specie:</label>
                <Controller
                  name="specie"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="border p-2">
                      {specieOptions.map((option) => (
                        <option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.value === ''}
                        selected={option.value === ''}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  />
              </Input>

              <Input className="w-full">
                <label>Choose Gender:</label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="border p-2">
                      {genderOptions.map((option) => (
                        <option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.value === ''}
                        selected={option.value === ''}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  />
              </Input>
            </div>


            <Input>
              <label>Attach a photo:</label>
            <ImageInput/>
            </Input>

            <Button type="primary">{loading ? "Loading..." : "POST"}</Button>
            {error && token && (
              <p
                style={{
                  background: "#ccc",
                  padding: "4px 8px",
                  color: "red",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {error}
              </p>
            )}
          </Form>
        </FormContainer>
      </ContainerSignup>
      {!token && (
        <>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">
                You need an account to post a pet
              </h3>
              <p className="py-4">Please Login or signup to start your post</p>
              <div className="flex justify-center gap-4 py-4 ">
                <Link to="/login">
                  <Button type="secondary" size="small">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button type="primary" size="small">
                    Signup
                  </Button>
                </Link>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
}

export default PostPetForm;
