import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.createForm();
  }

  private setData() {

  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: '',
      lastname: '',
      mobile: '',
      email: ['']
    });
  }

  onSave() {

  }

}
