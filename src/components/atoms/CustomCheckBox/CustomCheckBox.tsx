import { ChangeEventHandler } from "react";
import styles from "./customCheckBox.module.css";

type CustomCheckBoxProps = {
  name: string;
  checked?: boolean;
  onChecked: ChangeEventHandler<HTMLInputElement>;
};

const CustomCheckBox = ({ name, checked, onChecked }: CustomCheckBoxProps) => {
  return (
    <input
      className={styles.customCheckbox}
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChecked}
    />
  );
};

export default CustomCheckBox;
