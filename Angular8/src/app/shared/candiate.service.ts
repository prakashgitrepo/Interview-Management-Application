import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Candidate} from './candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandiateService {   
  selectedCandidate: Candidate = {
    name:'',
    age:'',
    experience:'', 
    qualification:'',
    contact:'',
  }

  constructor(private http: HttpClient) { }
  getprofile(candidate:Candidate){
    return this.http.post(environment.apiBaseUrl+'/userprofile',candidate);
  }
}
