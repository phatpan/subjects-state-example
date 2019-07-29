import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() msg: string;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.msg) {
      this.snackBar.open(this.msg, 'OK', {
        duration: 5000,
      });
    } else {
      this.snackBar.dismiss();
    }
  }

}
