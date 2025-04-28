// Hello.tsx
import React from "react";



export interface Fruit {
  id: number;
  name: string;
}

export interface Props {
  fruits: Fruit[];
}

export interface FruitListItemProps {
  fruit: Fruit;
}



function FruitListItem({ fruit }: FruitListItemProps) {
  function handleClick(e: React.MouseEvent) {
    console.log(`removed ${fruit.id}`);
    console.log(e);
  }

  //return <li onClick={handleClick}>{fruit.name}</li>;
  return <li onClick={(e) => handleClick(e)}>{fruit.name} </li>
}

function FruitList({ fruits }: Props) {
    const fruitListItems = fruits.map((fruit) => (
      <FruitListItem key={fruit.id} fruit={fruit} />
    ));
    return  <div className="fruits"><ul>{fruitListItems}</ul></div>;
  }
  

export default FruitList;
