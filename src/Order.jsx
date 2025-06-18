import {useState, useEffect} from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
  });

export default function Order() {
  const [pizzaTypes,setPizzaTypes] = useState([]);
  const [pizzaType,setPizzaType] = useState("pepperoni");
  const [pizzaSize,setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  
  
  let price, selectedPizza;

  if(!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
  }

  async function fetchPizzaTypes(){
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  },[])

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select 
                id="pizza-type"
                name="pizza-type" 
                value={pizzaType}
                onChange={e => setPizzaType(e.target.value)}
                >
                {pizzaTypes.map((pizza) =>(
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
                
              </select>
            </div>
            <div>
              <label>Pizza Size</label>
              <div>
                <span>
                  <input
                    onChange = {(e) =>{setPizzaSize(e.target.value)} }
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    onChange = {(e) =>{setPizzaSize(e.target.value)}}
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    onChange = {(e) =>{setPizzaSize(e.target.value)}}
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="Mozzarella Cheese, Pepperoni"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.37</p>
          </div>
        </div>
      </form>
    </div>
  );
}