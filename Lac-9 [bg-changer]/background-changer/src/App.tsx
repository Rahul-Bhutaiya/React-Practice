import { useState } from "react";
import { ColorPicker } from "./components";
import { colors } from "./utils";

function App() {
  const [currentColor, setCurrentColor] = useState("#d00000");
  return (
    <>
      {/* color container */}
      <div
        style={{ backgroundColor: currentColor }}
        className={`h-screen w-screen relative overflow-hidden`}
      ></div>
      {/* color chooser */}
      <div
        className="
      absolute bottom-6 left-1/2 translate-x-[-50%] bg-white flex flex-wrap gap-2 px-4 py-2 rounded-xl drop-shadow-2xl"
      >
        {colors.map((eachColor) => (
          <ColorPicker
            key={eachColor.id}
            color={eachColor}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
