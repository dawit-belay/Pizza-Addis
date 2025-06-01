import Pizza from './Pizza'

function App() {
  return (
    <div>
      <h1>Pizza Addis - order Now</h1>
      <Pizza
        name = "Pepperoni" 
        description="pep, cheese, n stuff" 
        image ={"/public/pizzas/pepperoni.webp"}
       />
      <Pizza 
        name = "Hawaiian" 
        description="ham, pineapple, n stuff" 
        image ={"/public/pizzas/Hawaiian.webp"}
      />
      <Pizza 
        name = "pepperoni" 
        description="french fries, hot dogs, n stuff" 
        image =  {"/public/pizzas/big_meat.webp"}
      />
    </div>
  )
}

export default App
