import { ChangeEvent, useState } from "react";

type FieldInputProps = {
  label: string;
  labelFor: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputValue: string;
  labelColor?: string;
  required?: boolean;
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
  inputValue,
  handleInputChange,
}: FieldInputProps) => {
  const [requiredError, setRequiredError] = useState(false);

  function handleOnBlur() {
    if (inputValue === "") {
      return setRequiredError(true);
    }
    setRequiredError(false);
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
