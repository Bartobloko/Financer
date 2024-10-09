import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(operation = "operation",result?: any) {
    return (error:any): Observable<any> => {
      console.log(error)
      console.log(`${operation} failed: ${error}`);
      return of(result as any)
    }
  }

}
