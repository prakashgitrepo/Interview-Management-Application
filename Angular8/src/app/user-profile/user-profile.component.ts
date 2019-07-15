import {CandiateService } from '../shared/candiate.service'

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private candidateService: CandiateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.candidateService.getprofile(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
c
  resetForm(form: NgForm) {
    this.candidateService.selectedCandidate = {
    name:'',
    age:'',
    experience:'', 
    qualification:'',
    contact:'',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }}
