import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HrService } from '../shared/hr.service'

@Component({
  selector: 'app-hrdata',
  templateUrl: './hrdata.component.html',
  styleUrls: ['./hrdata.component.css']
})
export class HrdataComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private hrservice: HrService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.hrservice.gethrdata(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
       
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

  }
