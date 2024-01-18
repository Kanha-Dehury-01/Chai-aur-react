import { useState ,useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");
  const [convertdAmount, setConvertdAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertdAmount);
    setConvertdAmount(amount);
  };
  const convert = useEffect(() => {
    console.log(currencyInfo[to])
    setConvertdAmount(amount * currencyInfo[to]);
  },[to,from,amount,currencyInfo])



  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/20">
          <h1 className="text-4xl mb-2 text-center font-bold text-white/50">Currency Converter</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 ">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(from) => setFrom(from)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                
                
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
                amount={convertdAmount}
                currencyOptions={option}
                onCurrencyChange={(to) => setTo(to)}
                selectCurrency={to} 
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Converting {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <h6 className="text-sm absolute bottom-0 right-0 text-white/40">@kanha-dehury-01</h6>
    </div>
  );
}

export default App;
