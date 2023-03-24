import { LargelPersonListItem } from "./components/ListItems/LargePersonListItem";
import { LargeProductListItem } from "./components/ListItems/LargeProductListItem";
import { SmallPersonListItem } from "./components/ListItems/SmallPersonListItem";
import { SmallProductListItem } from "./components/ListItems/SmallProductListItem";
import { NumberedList } from "./components/Lists/NumberedList";
import { RegularList } from "./components/Lists/RegularList";
import { Modal } from "./components/Modal/Modal";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

// function App() {
//   return (
//     <div className="App">
//       <RegularList
//         items={people}
//         resourceName="person"
//         itemComponent={SmallPersonListItem}
//       />
//       <RegularList
//         items={people}
//         resourceName="person"
//         itemComponent={LargelPersonListItem}
//       />
//       <NumberedList
//         items={products}
//         resourceName="product"
//         itemComponent={SmallProductListItem}
//       />
//       <NumberedList
//         items={products}
//         resourceName="product"
//         itemComponent={LargeProductListItem}
//       />
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Modal>
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
      </Modal>
    </>
  );
}

export default App;
