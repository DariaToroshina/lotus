import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Text } from "../text/Text";
import styles from "./Card.module.css";
import { CheckIcon } from "../../../sectionProcess/icon/CheckIcon";

type CardProps = {
  step?: number;
  title?: string;
  description?: string;
  text?: ReactNode;
  checklist?: string[];
  button?: ReactNode;
  variant?: "default" | "wide";
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({
  step,
  title,
  description,
  text,
  checklist,
  button,
  variant = "default",
  children,
}) => {
  const isCustom = Boolean(children);

  return (
    <div className={clsx(styles.root, styles[variant])}>
      {!isCustom && (step || title) && (
        <div className={styles.header}>
          {step && <div className={styles.circle}>{step}</div>}
          {title && (
            <Text className={styles.text} weight="bold">
              {title}
            </Text>
          )}
        </div>
      )}

      <div className={styles.description}>
        {isCustom ? (
          children
        ) : (
          <>
            {description && (
              <Text className={styles.text} size="small">
                {description}
              </Text>
            )}

            {(text || button) && (
              <div className={styles.priceBlock}>
                {text && <p className={styles.text}>{text}</p>}
                {button && <div className={styles.buttonWrapper}>{button}</div>}
              </div>
            )}

            {checklist && checklist.length > 0 && (
              <ul className={styles.list}>
                {checklist.map((item, i) => (
                  <li key={i} className={styles.wrapper}>
                    <CheckIcon className={styles.icon} /> {item}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};
