import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService extends DataService {

  constructor(private httpClient : HttpClient) { 
    super(httpClient);
  }
 
}
