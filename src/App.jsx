import { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";

function App() {
  return (
    <StrictMode>
      <div>
        <h1 className = "logo" >Pizza Addis - order Now</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
    
  )
}

export default App
