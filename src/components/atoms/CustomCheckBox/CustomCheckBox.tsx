import styles from "./customCheckBox.module.css";

type CustomCheckBoxProps = {
  name: string;
  checked?: boolean;
  onChecked: (string: string) => void;
};

const CustomCheckBox = ({ name, checked, onChecked }: CustomCheckBoxProps) => {
  return (
    <input
      className={styles.customCheckbox}
      type='checkbox'
      name={name}
      checked={checked}
      onChange={() => onChecked(name)}
    />
  );
};

export default CustomCheckBox;
