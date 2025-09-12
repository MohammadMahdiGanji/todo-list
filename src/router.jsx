import Task from "./page/Task/Task";
import Important from "./page/Important/Important";
import Completed from "./page/Completed/Completed";

export const router = [
  { path: "/", element: <Task /> },
  { path: "/important", element: <Important /> },
  { path: "/completed", element: <Completed /> },
];
