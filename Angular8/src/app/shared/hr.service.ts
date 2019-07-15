import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Hr} from './hr.model';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  selectedHR: Hr = {
    jobName:'',
    description:'',
  }
  constructor(private http: HttpClient) { }
  gethrdata(hr: Hr){
    return this.http.post(environment.apiBaseUrl+'/hradd',Hr);
  }
}
