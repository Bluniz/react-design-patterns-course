import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";

interface ControlledOnboardingFlowProps {
  onFinish: () => void;
  currentIndex: number;
  onNext: (value: any) => void;
}

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}: PropsWithChildren<ControlledOnboardingFlowProps>) => {
  const goToNext = (stepData: any) => {
    if (currentIndex + 1 < Children.toArray(children).length) {
      onNext(stepData);
    } else {
      onFinish();
    }
  };

  const currentChild = Children.toArray(children)[currentIndex];

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild as ReactElement<any>, { goToNext });
  }

  return <></>;
};
