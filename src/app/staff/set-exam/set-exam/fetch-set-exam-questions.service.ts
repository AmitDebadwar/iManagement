import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class FetchSetExamQuestionsService extends DataService {
  constructor(httpClient : HttpClient){
    super(httpClient);
  }
}
