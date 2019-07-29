import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { fromEvent, interval, merge } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('clappingBtn', { static: false }) clappingBtn;
  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogService.init$().subscribe(
      () => this.setupClapping()
    );
  }

  private setupClapping() {
    const newVal = { clap: 0 };
    const addClapping = () => {
      newVal.clap++;
      this.blogService.addClapping(newVal);
    };
    // Click to add a single star
    const click$ = fromEvent(this.clappingBtn.nativeElement, 'click');
    click$.subscribe(addClapping);
    // Hold mouse down to add stars continuously until mouse up or leave button
    const mousedown$ = fromEvent(this.clappingBtn.nativeElement, 'mousedown');
    const mouseup$ = fromEvent(this.clappingBtn.nativeElement, 'mouseup');
    const mouseleave$ = fromEvent(this.clappingBtn.nativeElement, 'mouseleave');
    const hold$ = mousedown$.pipe(
      switchMap(() => interval(200).pipe(
        takeUntil(
          merge(mouseup$, mouseleave$)
        )
      ))
    );
    hold$.subscribe(addClapping);
  }

}