import thankYouIcon from "../../../../assets/images/icon-thank-you.svg";
import styles from "./thankYouScreen.module.css";

const ThankYouScreen = () => {
  return (
    <div className={styles.thankYouContainer}>
      <img src={thankYouIcon} alt='Confirm image' />
      <h1 className={styles.thankYouTitle}>Thank you!</h1>
      <p className={styles.thankYouPhrase}>
        Thanks for confirming your subscrition! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgamimg.com
      </p>
    </div>
  );
};

export default ThankYouScreen;
