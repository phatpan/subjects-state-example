import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../profile/data/profile.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() msg: string;
  constructor(public data: ProfileService) { }

  ngOnInit() {
  }

}
