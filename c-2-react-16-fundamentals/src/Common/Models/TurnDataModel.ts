import { AuthorModel } from "./AuthorModel"

export interface TurnDataModel {
   author: AuthorModel,
   books: Array<string>
}