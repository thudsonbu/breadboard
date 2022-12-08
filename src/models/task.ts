import { ObjectId } from "mongodb";

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
