import { useState } from "react";
import Toggler from "../../atoms/Toggler/Toggler";
import styles from "./billingTimeOptions.module.css";

const BillingTimeOptions = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <section className={styles.billingOptionsContainer}>
      <p
        style={{
          color: !toggled ? "hsl(213, 96%, 18%)" : "",
        }}>
        Monthly
      </p>
      <div className={styles.togglerContainer}>
        <Toggler toggled={toggled} onClick={setToggled}></Toggler>
      </div>
      <p
        style={{
          color: toggled ? "hsl(213, 96%, 18%)" : "",
        }}>
        Yearly
      </p>
    </section>
  );
};

export default BillingTimeOptions;
