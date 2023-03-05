import styles from "./customCheckBox.module.css";

type CustomCheckBoxProps = {
  name: string;
  checked?: boolean;
};

const CustomCheckBox = ({ name, checked }: CustomCheckBoxProps) => {
  return (
    <input
      className={styles.customCheckbox}
      type='checkbox'
      name={name}
      checked={checked}
    />
  );
};

export default CustomCheckBox;
