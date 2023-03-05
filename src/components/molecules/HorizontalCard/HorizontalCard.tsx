import styles from "horizontalCard.module.css";
import CustomCheckBox from "../../atoms/CustomCheckBox/CustomCheckBox";

type AddOn = {
  title: string;
  description: string;
};

type HorizontalCardProps = {
  addOnName: string;
  price: string | number;
  details: AddOn;
  timePrice: string;
};

const HorizontalCard = ({
  addOnName,
  price,
  details,
  timePrice,
}: HorizontalCardProps) => {
  return (
    <article className={styles.horizotalCard_container}>
      <div className={styles.horizotalCard_checkbox}>
        <CustomCheckBox name={addOnName}></CustomCheckBox>
      </div>
      <div className={styles.horizotalCard_details}>
        <h3>{details.title}</h3>
        <p>{details.description}</p>
      </div>
      <div className={styles.horizontalCard_price}>
        <p>
          +${price}/{timePrice}{" "}
        </p>
      </div>
    </article>
  );
};

export default HorizontalCard;
