import { FC, ReactNode } from "react";
import styles from "./ButtonWrapper.module.css";

type ButtonWrapperProps = {
  children: ReactNode;
};

const ButtonWrapper: FC<ButtonWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ButtonWrapper;
