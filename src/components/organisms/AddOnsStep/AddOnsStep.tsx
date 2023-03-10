import HorizontalCard from "../../molecules/HorizontalCard/HorizontalCard";
import CustomCheckBox from "../../atoms/CustomCheckBox/CustomCheckBox";
import styles from "./addOnsStep.module.css";
import { useState } from "react";

let addOns = [
  {
    id: 1,
    addOnName: "onlineService",
    addOnTitle: "Online service",
    addOnDescription: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
    selected: false,
  },
  {
    id: 2,
    addOnName: "largerStorage",
    addOnTitle: "Larger storage",
    addOnDescription: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
  {
    id: 3,
    addOnName: "customProfile",
    addOnTitle: "Customizable Profile",
    addOnDescription: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
];

const AddOnsStep = () => {
  const [addOnsJSON, setAddOns] = useState(addOns);

  function editAddOns(addOn: string) {
    setAddOns((prevState) => {
      return prevState.map((state) =>
        state.addOnName === addOn
          ? { ...state, selected: !state.selected }
          : state
      );
    });
  }

  function handleAddOnChecked(addOn: string) {
    const addOnOptions = {
      onlineService: editAddOns(addOn),
      largerStorage: editAddOns(addOn),
      customProfile: editAddOns(addOn),
    };

    return addOnOptions[addOn as keyof typeof addOnOptions];
  }

  return (
    <section className={styles.addOns_container}>
      {addOnsJSON.map((addOn) => {
        return (
          <HorizontalCard key={addOn.id} checked={addOn.selected}>
            <div className={styles.horizotalCard_checkbox}>
              <CustomCheckBox
                name={addOn.addOnName}
                onChecked={handleAddOnChecked}></CustomCheckBox>

              <div className={styles.horizotalCard_details}>
                <h3>{addOn.addOnTitle}</h3>
                <p>{addOn.addOnDescription}</p>
              </div>
            </div>

            <div className={styles.horizontalCard_price}>
              <p>
                +${addOn.monthlyPrice}/{"mo"}{" "}
              </p>
            </div>
          </HorizontalCard>
        );
      })}
    </section>
  );
};

export default AddOnsStep;
