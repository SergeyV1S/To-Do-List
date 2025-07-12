import type { ITask } from "@modules/task/types";

export const defaultTasks: ITask[] = [
  {
    id: 1,
    title: "Исправить верстку страницы входа",
    description: "Кнопка входа криво отображается на мобильных устройствах",
    category: "Bug",
    status: "In Progress",
    priority: "High"
  },
  {
    id: 2,
    title: "Пофиксить темную тему",
    description: "Добавить компонент выбора темы",
    category: "Feature",
    status: "To Do",
    priority: "Medium"
  },
  {
    id: 3,
    title: "Обновить документацию API",
    category: "Documentation",
    status: "Done",
    priority: "Low"
  },
  {
    id: 4,
    title: "Реализовать пагинацию таблицы",
    description: "Добавить пагинацию для таблицы пользователей",
    category: "Feature",
    status: "In Progress",
    priority: "High"
  },
  {
    id: 5,
    title: "Оптимизировать загрузку изображений",
    description: "Добавить lazy loading для галереи",
    category: "Refactor",
    status: "To Do",
    priority: "Medium"
  },
  {
    id: 6,
    title: "Исправить баг с кэшированием",
    description: "Данные не обновляются после изменения",
    category: "Bug",
    status: "In Progress",
    priority: "High"
  },
  {
    id: 7,
    title: "Добавить логотип в шапку",
    description: "Загрузить новый логотип компании",
    category: "Test",
    status: "Done",
    priority: "Low"
  }
];
