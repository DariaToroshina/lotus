import { Button } from "../../shared/ui/button/Button";
import { Text } from "../../shared/ui/text/Text";

export const cardsConfig = [
  {
    title: "Создание робота до 150 шагов под ключ",
    description:
      "Подходит для тех, кто хочет попробовать автоматизацию и внедрить первого цифрового помощника. Предназначен для простых задач.",
    text: (
      <Text weight="bold">
        150 000 ₽
        <Text tag="span" weight="thin" size="small">
          / единоразово
        </Text>
      </Text>
    ),
    button: (
      <Button size="small" href="/demo">
        Выбрать тариф
      </Button>
    ),
  },
  {
    title: "Создание робота до 500 шагов под ключ",
    description:
      "Ориентирован на компании, которые готовы автоматизировать средние по сложности процессы. Идеален для задач с множественными условиями и дополнительными проверками.",
    text: (
      <Text weight="bold">
        250 000 ₽
        <Text tag="span" weight="thin" size="small">
          / единоразово
        </Text>
      </Text>
    ),
    button: (
      <Button size="small" href="/demo">
        Выбрать тариф
      </Button>
    ),
  },
  {
    title: "Создание робота свыше 500 шагов под ключ",
    description:
      "Предназначен для автоматизации нестандартных и сложных процессов. Подходит для задач с большим количеством переменных и разветвлённой логикой.",
    text: <Text weight="bold">По запросу</Text>,
    button: (
      <Button size="small" href="/demo">
        Выбрать тариф
      </Button>
    ),
  },
];
