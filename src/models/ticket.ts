import * as mongoose from "mongoose";
import {InstanceType, ModelType, prop, Typegoose} from "typegoose";
import {v4} from "uuid";
export class Ticket extends Typegoose {

  @prop({default: v4, unique: true, index: true})
  public _id: string;
  @prop({required: true, unique: true, index: true})
  public title: string;
  @prop({required: false})
  public description: string;
  @prop({required: false})
  public message: any;

}
