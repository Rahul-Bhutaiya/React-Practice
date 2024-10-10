interface IProps {
  color: colorType;
  currentColor: string;
  setCurrentColor: (colorCode: string) => void;
}

interface colorType {
  id: number;
  name: string;
  code: string;
  labelColor: string;
}

const ColorPicker = ({ color, currentColor, setCurrentColor }: IProps) => {
  function handleColorChange() {
    setCurrentColor(color.code);
  }

  return (
    <button
      style={{ backgroundColor: color.code, color: color.labelColor }}
      className={
        color.code === currentColor
          ? " border-black border-[2px] text-white rounded-full px-3 py-1 drop-shadow-2xl"
          : "text-white rounded-full px-3 py-1 drop-shadow-2xl"
      }
      onClick={handleColorChange}
    >
      {color.name[0].toUpperCase() + color.name.slice(1)}
    </button>
  );
};

export default ColorPicker;
