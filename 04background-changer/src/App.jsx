import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const color1 = function(){
    const hex = '0123456789ABCDEF';
    let bgColor = '#';
    
    for(let i=0;i<6;i++){
        bgColor += hex[Math.floor(Math.random()*16)];
    }
    return bgColor;
};
  
  

  return (
    <div className="w-full h-screen duration-700 " style={{backgroundColor:color}}>
      <h1 className="text-5xl  text-center ">Background Changer</h1>
      <div  className="fixed flex flex-wrap space-y-2 justify-center md:flex-row md:space-x-2 md:space-y-0 border-double border-2 rounded-2xl bg-white p-1  inset-x-10 bottom-10 ">
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("black")} 
          className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Black
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("white")}
          className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm border-solid border-black border-2 "
        >
          white
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("red")}
          className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Red
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("green")}
          className="rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Green
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("rgb(37 99 235)")}
          className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Blue
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("rgb(234 88 12 )")}
          className="rounded-full bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Orange
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("rgb(202 138 4)")}
          className="rounded-full bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Yellow
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor("rgb(2 132 199)")}
          className="rounded-full bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Sky
        </button>
        <button
          onMouseLeave={()=>setColor("hotpink")} onClick={()=>setColor(color1)}
          className="rounded-full bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Random Color
        </button>
      </div> 
    </div>
  );
}

export default App;
