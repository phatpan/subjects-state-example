import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';

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
      () => this.setupClap()
    );
  }

  private setupClap() {
    const newVal = { clap: 0 };
    const addClap = () => {
      newVal.clap++;
      this.blogService.addClap(newVal);
    };
    // Click to add a single clap
    const click$ = fromEvent(this.clappingBtn.nativeElement, 'click');
    click$.subscribe(addClap);
    // Hold mouse down to add clap continuously until mouse up or leave button
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
    hold$.subscribe(addClap);
  }

}