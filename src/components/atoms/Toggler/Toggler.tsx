import { useState } from "react";
import styles from "./toggler.module.css";

type Toggler = {
  label: string;
  toggled: boolean;
  onClick: (arg: boolean) => void;
};

const Toggler = ({ label, toggled, onClick }: Toggler) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className={styles.togglerLabel}>
      <input
        className={styles.togglerInput}
        type='checkbox'
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className={styles.togglerSpan} />
      <strong>{label}</strong>
    </label>
  );
};

export default Toggler;
