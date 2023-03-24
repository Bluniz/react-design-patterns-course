import { UserInfo } from "./components/ListItems/UserInfo";

import { ResourceLoader } from "./components/CurrentUserLoader/ResourceLoader";
import { ProductInfo } from "./components/ListItems/ProductInfo";
import { DataSource } from "./components/CurrentUserLoader/DataSource";
import axios from "axios";

const getServerData = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};

const getLocalStorageData = (key: string) => () => {
  return localStorage.getItem(key) || "";
};

const Text = ({ message }: { message?: string }) => {
  return <h1>{message}</h1>;
};

function App() {
  return (
    <>
      <ResourceLoader resourceName="person" resourceUrl="/users/234">
        <UserInfo />
      </ResourceLoader>
      <hr />
      <ResourceLoader resourceName="product" resourceUrl="/products/1">
        <ProductInfo />
      </ResourceLoader>
      <hr />
      <DataSource
        getDataFunction={async () => {
          const response = await getServerData("/users/123");
          return response;
        }}
        resourceName="person"
      >
        <UserInfo />
      </DataSource>
      <hr />
      <DataSource
        getDataFunction={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
