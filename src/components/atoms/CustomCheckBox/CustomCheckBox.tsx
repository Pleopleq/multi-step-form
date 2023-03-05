import styles from "./customCheckBox.module.css";

type CustomCheckBoxProps = {
  name: string;
  checked: boolean;
};

const CustomCheckBox = ({ name, checked }: CustomCheckBoxProps) => {
  return (
    <input type='checkbox' name={name} id='custom-checkbox' checked={checked} />
  );
};

export default CustomCheckBox;
