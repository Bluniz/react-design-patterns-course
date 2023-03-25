import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

interface UncontrolledOnboardingFlowProps {
  onFinish: ({}: any) => void;
}

export const UncontrolledOnboardingFlow = ({
  children,
  onFinish,
}: PropsWithChildren<UncontrolledOnboardingFlowProps>) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData: any) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < Children.toArray(children).length)
      setCurrentIndex(nextIndex);
    else onFinish(updatedData);

    setOnboardingData(updatedData);
  };

  const currentChild = Children.toArray(children)[currentIndex];

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild as ReactElement<any>, { goToNext });
  }

  return <></>;
};
