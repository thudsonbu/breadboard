import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public habiticaId: string,
    public todoistId: string,
    public _id?: ObjectId
  ) {}
}
