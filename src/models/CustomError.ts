import {staticMethod} from "typegoose";

export class CustomError {

  @staticMethod
  public static build(httpStatus: number, errorMessage: string, object?: any): CustomError {
    const error = new CustomError();
    error.httpStatus = httpStatus;
    error.errorMessage = errorMessage;
    error.object = object;
    return error;
  }

  private httpStatus: number;
  private errorMessage: string;
  private object: any;

}
