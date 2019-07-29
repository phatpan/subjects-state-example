import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './data/profile.service';
import { Profile } from './data/profile.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private data: ProfileService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.subscription = this.data.profileStore.subscribe((profile: Profile) => {
      if (profile) {
        this.setData(profile);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSave() {
    const profile = this.form.getRawValue();
    this.data.updateProfile(profile).subscribe(
      _ => this.router.navigate([`/`]),
      _ => this.setData(profile));
  }

  private setData(profile: Profile) {
    this.form.controls.name.setValue(profile.name);
    this.form.controls.lastname.setValue(profile.lastname);
    this.form.controls.mobile.setValue(profile.mobile);
    this.form.controls.email.setValue(profile.email);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: '',
      lastname: '',
      mobile: '',
      email: ['']
    });
  }
}
