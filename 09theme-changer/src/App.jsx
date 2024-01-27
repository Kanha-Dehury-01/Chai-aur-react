import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeColor, setThemeColor] = useState("light");

  const darkTheme = () => {
    setThemeColor("dark");
  };

  const lightTheme = () => {
    setThemeColor("light");
  };

  useEffect(()=>{
    const element = document.querySelectorAll("html")
    element[0].classList.remove("light" , "dark")
    element[0].classList.add(themeColor)

  },[themeColor])

  return (
    <>
      <ThemeProvider value={{ themeColor, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
