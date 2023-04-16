import React, { useEffect, useState } from 'react'

const CheckBox = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const Catalogues = [
        {
          id: "01",
          name: "Chicken",
          price: 100
        },
        {
          id: "02",
          name: "Beef",
          price: 150
        },
        {
          id: "03",
          name: "Lamb",
          price: 1008
        },
        {
          id: "04",
          name: "Pork",
          price: 100
        },
        {
          id: "05",
          name: "Seafood",
          price: 120
        },
        {
          id: "06",
          name: "Dairy",
          price: 100
        },
        {
          id: "07",
          name: "Tofu",
          price: 900
        },
        {
          id: "08",
          name: "Vegan",
          price: 100
        }
      ];

      const handleClick = (e,item) => {
          console.log("e",e,"target",e.target);
          const {id, checked} = e.target;

          if(checked){
            setSelectedItems(prev=>{
                const finalResult = [...prev,item];
                const finalPrice = finalResult.reduce((acc,curr)=>acc+curr.price,0);
                setTotalPrice(finalPrice);
                return finalResult;
            });
          }
          else{
            setSelectedItems(prev=>{
                let currentItems = [...prev];
                currentItems = currentItems.filter(item=>item.id !== id);
                const finalPrice = currentItems.reduce((acc,curr)=>acc+curr.price,0);
                setTotalPrice(finalPrice);
                return currentItems;
            });
          }
     
      }
      
      console.log(selectedItems)
  return (
    <React.Fragment>
        {Catalogues.map((item)=>{
            return (
                <div>
                    <input
      id={item.id}
      name={item.name}
      type={"checkbox"}
      onChange={(e)=>{handleClick(e,item)}}
      checked={selectedItems.find(item=>item==item.id)}
    />{item.name}{item.price}
   
                </div>
            )
        })}
         <p>{totalPrice}</p>
    </React.Fragment>
  )
}

export default CheckBox