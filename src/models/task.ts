import { ObjectId } from "mongodb";
import {
  HabiticaTaskType,
  TodoistDifficulty,
  HabiticaPriority,
} from "../global";

export default class Task {
  constructor(
    public text: string,
    public habiticaType: HabiticaTaskType,
    public difficulty: TodoistDifficulty,
    public priority: HabiticaPriority,
    public completed: boolean,
    public habiticaId: string,
    public todoistId: string,
    public _id?: ObjectId
  ) {}
}
