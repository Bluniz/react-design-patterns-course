export interface PersonProps {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

export interface PersonListItemProps {
  person: PersonProps;
}

export interface ProductProps {
  name: string;
  price: string;
  description: string;
  rate: number;
}

export interface ProductListItemProps {
  product: ProductProps;
}
