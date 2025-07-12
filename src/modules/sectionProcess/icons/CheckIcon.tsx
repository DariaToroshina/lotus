import { FC } from "react";

type CheckIconProps = {
  className?: string;
};

export const CheckIcon: FC<CheckIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.875 10L7.5 15.625L18.125 4.375"
        stroke="#25282A"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
