import HorizontalCard from "../../molecules/HorizontalCard/HorizontalCard";
import CustomCheckBox from "../../atoms/CustomCheckBox/CustomCheckBox";
import styles from "./addOnsStep.module.css";
import addOns from "../../../JSON/addOns.json";
import { AddOn } from "../MultiStepForm/MultiStepForm";

type AddOnsProps = {
  setAddons: React.Dispatch<React.SetStateAction<AddOn[]>>;
  addOnsSelected: AddOn[];
  planTime: boolean;
};

const AddOnsStep = ({ setAddons, addOnsSelected, planTime }: AddOnsProps) => {
  function editAddOns(addOn: AddOn) {
    let found = addOnsSelected.find((v) => v.id === addOn.id);

    if (found) {
      addOn.selected = false;
      setAddons((prevState) => {
        let index = prevState.findIndex((state) => state.id === found?.id);

        return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
      });
    }

    if (!found) {
      addOn.selected = true;
      setAddons((prevState) => {
        return prevState.concat(addOn);
      });
    }
  }

  return (
    <section className={styles.addOns_container}>
      {addOns.map((addOn) => {
        return (
          <HorizontalCard key={addOn.id} checked={addOn.selected}>
            <div className={styles.horizotalCard_checkbox}>
              <CustomCheckBox
                name={addOn.addOnName}
                onChecked={() => editAddOns(addOn)}
                checked={addOn.selected}></CustomCheckBox>

              <div className={styles.horizotalCard_details}>
                <h3>{addOn.addOnTitle}</h3>
                <p>{addOn.addOnDescription}</p>
              </div>
            </div>

            <div className={styles.horizontalCard_price}>
              <p>
                +${planTime ? addOn.yearlyPrice : addOn.monthlyPrice}/
                {planTime ? "yr" : "mo"}
              </p>
            </div>
          </HorizontalCard>
        );
      })}
    </section>
  );
};

export default AddOnsStep;
