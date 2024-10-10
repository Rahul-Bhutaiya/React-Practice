interface IProps {
  label: string;
  currentState: boolean;
  setCurrentState: (currentState: boolean) => void;
}

const Checkbox = ({ label, currentState, setCurrentState }: IProps) => {
  return (
    <div className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={label}
        checked={currentState}
        onChange={() => setCurrentState(!currentState)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
