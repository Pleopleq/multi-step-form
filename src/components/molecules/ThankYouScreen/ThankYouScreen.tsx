import thankYouIcon from "../../../../assets/images/icon-thank-you.svg";

const ThankYouScreen = () => {
  return (
    <div>
      <img src={thankYouIcon} alt='Confirm image' />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscrition! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgamimg.com
      </p>
    </div>
  );
};

export default ThankYouScreen;
