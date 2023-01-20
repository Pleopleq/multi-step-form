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
  return (
    <div className='input-container'>
      <label
        className='input-label'
        htmlFor={labelFor}
        style={{
          color: labelColor != undefined ? labelColor : "",
        }}>
        {label}
      </label>
      <input
        className='input-field'
        required={required}
        placeholder={placeholder}
        style={{
          color: inputColor != undefined ? inputColor : "",
        }}></input>
    </div>
  );
};

export default FieldInput;
