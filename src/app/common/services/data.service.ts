import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

 
export class DataService {

  constructor(private http : HttpClient) { }
 
  public get(url: string){
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public getById(url: string, id : any){
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public getAllById(url: string, id: any){

  }

  public update(url: string, data: any){
    let httpOptions={};
    return this.http.put(url,data,httpOptions);
  }

  public post(url : string, data: any){
    let httpOptions={};
    return this.http.post(url,data,httpOptions);
  }


  
  private handleError(error: HttpErrorResponse) {
       alert(error.message);
       return throwError(error);
  }
}
