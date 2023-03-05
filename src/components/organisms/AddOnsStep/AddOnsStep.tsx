import HorizontalCard from "../../molecules/HorizontalCard/HorizontalCard";

const addOns = [
  {
    id: 1,
    addOnName: "onlineService",
    addOnTitle: "Online service",
    addOnDescription: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    addOnName: "largerStorage",
    addOnTitle: "Larger storage",
    addOnDescription: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    addOnName: "customProfile",
    addOnTitle: "Customizable Profile",
    addOnDescription: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const AddOnsStep = () => {
  return (
    <section>
      {addOns.map((addOn) => {
        return (
          <HorizontalCard
            addOnName={addOn.addOnName}
            price={addOn.monthlyPrice}
            details={{
              title: addOn.addOnTitle,
              description: addOn.addOnDescription,
            }}
            timePrice={"mo"}></HorizontalCard>
        );
      })}
    </section>
  );
};

export default AddOnsStep;
