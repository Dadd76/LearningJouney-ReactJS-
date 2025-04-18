// Hello.tsx

import React from 'react';

// Définition du type Props pour le composant Hello
type Props = {
  name: string;
};

// Composant Hello qui prend une prop 'name' de type string
export function Hello({ name }: Props) {
  return <h1>Hello, {name}!</h1>;
}