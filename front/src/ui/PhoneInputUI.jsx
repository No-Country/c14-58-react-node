import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import styled from "@emotion/styled"

const PhoneInput2 = styled(PhoneInput)`
  .react-tel-input {
  color: #373737;
  }

  .form-control{
    height: 42px;

    width: 100%;
    border-color: #f48fb1;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #444;
    border-color: #f48fb1;
    border-radius: 8px;
  }
  .flag-dropdown{
  }
`

function PhoneInputUI({setPhone}) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleChange = (value) => {
    setPhone(value)
    setPhoneNumber(value)
  }
  const validatePhoneNumer = (phoneNUmber) => {
    const phoneNumberPattern = /^\d{10}$/
    return phoneNumberPattern.test(phoneNUmber)
  }

  return (
    <div>
      <label>
        <PhoneInput2
          className="w-full"
          country = {'us'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{required:true}}
          placeholder="123 456 789"
        />
      </label>
    </div>
  )
}

export default PhoneInputUI