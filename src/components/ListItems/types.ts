export interface PersonProps {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
  id: string;
}

export interface PersonListItemProps {
  person?: PersonProps;
}

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  description: string;
  rate: number;
}

export interface ProductInfoProps {
  product?: ProductProps;
}
