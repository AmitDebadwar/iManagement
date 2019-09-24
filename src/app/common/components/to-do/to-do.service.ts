import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService extends DataService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  
}
