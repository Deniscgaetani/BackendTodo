import {prop, Typegoose} from "typegoose";
import {v4} from "uuid";

export class Ticket extends Typegoose {

  @prop({default: v4, unique: true})
  public _id: string;
  @prop({required: false})
  public title: string;
  @prop({required: false})
  public description: string;

}
