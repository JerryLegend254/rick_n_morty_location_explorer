export default function RadioContainer({
  selectedValue,
  handleRadioChange,
  value,
}: {
  selectedValue: string;
  handleRadioChange: Function;
  value: string;
}) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        id={value}
        value={value}
        checked={selectedValue === value}
        onChange={() => handleRadioChange(value)}
      />
      <label htmlFor={value} className="capitalize">
        {value} name
      </label>
    </div>
  );
}
