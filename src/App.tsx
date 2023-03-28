// import { UserInfo } from "./components/ListItems/UserInfo";

import { UserInfoForm } from "./components/Forms/UserInfoForm";
// import { UserInfo } from "./components/ListItems/UserInfo";
// import { printProps } from "./components/PrintProps/PrintProps";
// import { withUser } from "./components/WithUser/withUser";

// import { ResourceLoader } from "./components/CurrentUserLoader/ResourceLoader";
// import { ProductInfo } from "./components/ListItems/ProductInfo";
// import { DataSource } from "./components/CurrentUserLoader/DataSource";
//import axios from "axios";
// import { useState } from "react";
// import { ControlledForm } from "./components/Forms/ControlledForm";
// import { UncontrolledForm } from "./components/Forms/UncontrolledForm";
// import { UncontrolledModal } from "./components/Modal/UncontrolledModal";
// import { ControlledModal } from "./components/Modal/ControlledModal";
// import { UncontrolledOnboardingFlow } from "./components/OnboardingFlow/UncontrolledOnboardingFlow";
// import { ControlledOnboardingFlow } from "./components/OnboardingFlow/ControlledOnboardingFlow";

// const UserInfoWithLoader = withUser(UserInfo, "123");

// const App = () => {
//   return <UserInfoWithLoader />;
// };

const App = () => {
  return <UserInfoForm />;
};

// const getServerData = async (url: string) => {
//   const response = await axios.get(url);

//   return response.data;
// };

// const getLocalStorageData = (key: string) => () => {
//   return localStorage.getItem(key) || "";
// };

// const Text = ({ message }: { message?: string }) => {
//   return <h1>{message}</h1>;
// };

// function App() {
//   return (
//     <>
//       <ResourceLoader resourceName="person" resourceUrl="/users/234">
//         <UserInfo />
//       </ResourceLoader>
//       <hr />
//       <ResourceLoader resourceName="product" resourceUrl="/products/1">
//         <ProductInfo />
//       </ResourceLoader>
//       <hr />
//       <DataSource
//         getDataFunction={async () => {
//           const response = await getServerData("/users/123");
//           return response;
//         }}
//         resourceName="person"
//       >
//         <UserInfo />
//       </DataSource>
//       <hr />
//       <DataSource
//         getDataFunction={getLocalStorageData("message")}
//         resourceName="message"
//       >
//         <Text />
//       </DataSource>
//     </>
//   );
// }

// const StepOne = ({ goToNext }: any) => (
//   <>
//     <h1>Step One</h1>
//     <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext }: any) => (
//   <>
//     <h1>Step Two</h1>
//     <button onClick={() => goToNext({ age: 60 })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext }: any) => (
//   <>
//     <h1>Step Three</h1>
//     <p>Congratulations! You qualify for our senior discount</p>
//     <button onClick={() => goToNext()}>Next</button>
//   </>
// );
// const StepFour = ({ goToNext }: any) => (
//   <>
//     <h1>Step Four</h1>
//     <button onClick={() => goToNext({ hairColor: "Brown" })}>Next</button>
//   </>
// );

// const App = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [onboardingData, setOnboardingData] = useState<any>({});

//   const onNext = (stepData: any) => {
//     setOnboardingData((currentOnboardingData: any) => ({
//       ...currentOnboardingData,
//       ...stepData,
//     }));

//     setCurrentIndex((index) => index + 1);
//   };

//   return (
//     <>
//       <UncontrolledForm />
//       <hr />
//       <ControlledForm />
//       <hr />
//       <UncontrolledModal />
//       <hr />
//       <ControlledModal
//         isOpen={isOpenModal}
//         onClose={() => {
//           alert("Are you sure?");
//           setIsOpenModal(false);
//         }}
//       />
//       <button onClick={() => setIsOpenModal(true)}>
//         {isOpenModal ? "Hide modal" : "Show modal"}
//       </button>

//       <hr />

//       <UncontrolledOnboardingFlow
//         onFinish={(data) => {
//           console.table(data);
//           alert("Onboarding complete!");
//         }}
//       >
//         <StepOne />
//         <StepTwo />
//         <StepFour />
//       </UncontrolledOnboardingFlow>
//       <hr />

//       <ControlledOnboardingFlow
//         currentIndex={currentIndex}
//         onNext={onNext}
//         onFinish={() => {
//           console.table(onboardingData);
//           alert("Onboarding complete!");
//         }}
//       >
//         <StepOne />
//         <StepTwo />
//         {onboardingData.age! >= 62 && <StepThree />}

//         <StepFour />
//       </ControlledOnboardingFlow>
//     </>
//   );
// };

export default App;
