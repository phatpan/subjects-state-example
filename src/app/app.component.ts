import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile/data/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'subjects-state-example';

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.init().subscribe();
  }
}
