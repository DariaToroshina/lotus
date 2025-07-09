import { CheckIcon } from "../icons/CheckIcon";
import { DisplayIcon } from "../icons/DisplayIcon";
import { DownArrowIcon } from "../icons/DownArrowIcon";
import { HoursIcon } from "../icons/HoursIcon";
import SpeedIcon from "../icons/SpeedIcon";
import { TopArrowIcon } from "../icons/TopArrowIcon";

export const cardsConfig = [
  {
    icon: <DownArrowIcon />,
    title: "Снижение затрат",
    subtitle: "Вы не платите ЗП, зарплатные налоги, отпускные и больничные",
  },
  {
    icon: <HoursIcon />,
    title: "Работа 24/7",
    subtitle: "Выполняет задачи без перерывов, выходных и отпусков",
  },
  {
    icon: <SpeedIcon />,
    title: "Быстрее человека",
    subtitle:
      "Обрабатывает информацию и выполняет действия в разы быстрее, чем сотрудник",
  },
  {
    icon: <CheckIcon />,
    title: "Отсутствие ошибок",
    subtitle: "Следует чётким инструкциям и не умеет ошибаться",
  },
  {
    icon: <DisplayIcon />,
    title: "Прозрачность работы",
    subtitle:
      "Все действия фиксируются и Вы всегда знаете, что и когда было сделано",
  },
  {
    icon: <TopArrowIcon />,
    title: "Скорость масштабирования",
    subtitle: "Подключение робота исключает задержку из-за найма и адаптации",
  },
];
