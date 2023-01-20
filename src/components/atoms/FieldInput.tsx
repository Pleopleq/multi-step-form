import { useState } from "react";

type FieldInputProps = {
  label: string;
  labelFor: string;
  labelColor?: string;
  required?: boolean;
  placeholder: string;
  inputColor?: string;
  focusColor?: string;
};

const FieldInput = ({
  label,
  labelFor,
  required = false,
  placeholder,
  labelColor,
  inputColor,
}: FieldInputProps) => {
  const [requiredError, setRequiredError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleOnBlur() {
    if (inputValue === "") {
      return setRequiredError(true);
    }
    setRequiredError(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className='input-container'>
      <div className='label-container'>
        <label
          className='input-label'
          htmlFor={labelFor}
          style={{
            color: labelColor != undefined ? labelColor : "",
          }}>
          {label}
        </label>

        {required && requiredError ? (
          <label className='input-label red-label'>
            This field is required
          </label>
        ) : (
          ""
        )}
      </div>

      <input
        className='input-field'
        required={required}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputValue}
        onFocus={() => setRequiredError(false)}
        onBlur={handleOnBlur}
        style={{
          borderColor: required && requiredError ? "red" : "",
          color: inputColor != undefined ? inputColor : "",
        }}></input>
    </div>
  );
};

export default FieldInput;
