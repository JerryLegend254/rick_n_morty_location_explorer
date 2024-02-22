import RadioContainer from "./radioContainer";

export default function RadioGroupContainer({
  handleRadioChange,
  selectedValue,
}: {
  handleRadioChange: Function;
  selectedValue: string;
}) {
  const categories = ["location", "character", "episode"];
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category) => (
        <RadioContainer
          handleRadioChange={handleRadioChange}
          selectedValue={selectedValue}
          value={category}
          key={category}
        />
      ))}
    </div>
  );
}
