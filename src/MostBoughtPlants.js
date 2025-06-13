import React from "react";

const plants = [
  {
    name: "Araucaria Heterophylla Plant",
    price: "₹350",
    image: "https://th.bing.com/th/id/OIP.q0M-SUl-wSZfgwwLxP031QHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: " Red Rose Plant",
    price: "₹750",
    image: "https://th.bing.com/th/id/OIP.qBiy1ZzXpz792P2hHrHWvQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Blush Green Cactus",
    price: "₹700",
    image: "https://th.bing.com/th/id/OIP.jZP04du2FxVGkrLUzfdwQAHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Yellow Daffodils",
    price: "₹650",
    image: "https://th.bing.com/th/id/OIP.iOG7rXTo4Prbiqqz-Q8V-wHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Tulsi Plant",
    price: "₹870",
    image: "https://th.bing.com/th/id/OIP.C0NUHyV5Zif_8S_iM2RcQgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Australian Flinge Lily",
    price: "₹950",
    image: "https://th.bing.com/th/id/OIP.M4wEKfwkPIJ3q2pFUOYa7gHaEJ?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

function MostBoughtPlants() {
  return (
    <div className="bg-white py-10 px-4">
      <p style={{textAlign:"center", fontSize:"40px", fontFamily:"sans-serif", color:"green"}}>Most Bought Plants</p>
       <div style={{display:"flex"}}>
        {plants.map((plant, index) => (
          <div key={index}>
            <img src={plant.image} height="250px" width="250px" alt={plant.name} style={{borderRadius:"10px"}}></img>
            <h3 style={{textAlign:"center"}}>{plant.name}</h3>
            <p style={{textAlign:"center"}}>{plant.price}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostBoughtPlants;