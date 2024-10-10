import { Toaster } from "react-hot-toast";
import CurrencyConverter from "./modules/currency-converter";

function App() {
  return (
    <>
      <CurrencyConverter />
      <Toaster />
    </>
  );
}

export default App;
