import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/profile/data/profile.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  name: string;
  constructor(
    private router: Router,
    public data: ProfileService
  ) { }

  goHomePage() {
    this.router.navigate([`/`]);
  }
}
