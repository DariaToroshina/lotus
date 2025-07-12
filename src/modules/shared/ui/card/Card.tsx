// import clsx from "clsx";
// import { FC, ReactNode } from "react";
// import { Text } from "../text/Text";
// import styles from "./Card.module.css";
// import { CheckIcon } from "../../../sectionProcess/icon/CheckIcon";

// type CardProps = {
//   title: string;
//   num?: ReactNode;
//   variant?: "default" | "wide";
//   children?: ReactNode;
// };

// export const Card: FC<CardProps> = ({
//   title,
//   variant = "default",
//   children,
//   num,
// }) => {
//   return (
//     <div className={clsx(styles.root, styles[variant])}>
//       <div className={styles.header}>
//         {num}
//         <Text className={styles.text} weight="bold">
//           {title}
//         </Text>
//       </div>

//       <div className={styles.description}>
//         {children}
//         {/* {isCustom ? (
//           children
//         ) : (
//           <>
//             {description && (
//               <Text className={styles.text} size="small">
//                 {description}
//               </Text>
//             )}

//             {(text || button) && (
//               <div className={styles.priceBlock}>
//                 {text && <p className={styles.text}>{text}</p>}
//                 {button && <div className={styles.buttonWrapper}>{button}</div>}
//               </div>
//             )}

//             {checklist && checklist.length > 0 && (
//               <ul className={styles.list}>
//                 {checklist.map((item, i) => (
//                   <li key={i} className={styles.wrapper}>
//                     <CheckIcon className={styles.icon} /> {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };

import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Text } from "../text/Text";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  num?: ReactNode;
  variant?: "default" | "wide";
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({
  title,
  description,
  variant = "default",
  children,
  num,
}) => {
  return (
    <div className={clsx(styles.root, styles[variant])}>
      <div className={styles.header}>
        {num}
        <Text className={styles.text} weight="bold">
          {title}
        </Text>
      </div>

      <div className={styles.content}>
        <Text size="small">{description}</Text>
        {children}
      </div>
    </div>
  );
};
