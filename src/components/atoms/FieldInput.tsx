type FieldInputProps = {
  label: string;
  labelFor: string;
  required?: boolean;
  placeholder: string;
  color?: string;
  focusColor?: string;
};

const FieldInput = ({
  label,
  labelFor,
  required = false,
  placeholder,
}: FieldInputProps) => {
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input required={required} placeholder={placeholder}></input>
    </div>
  );
};

export default FieldInput;
