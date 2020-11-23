import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-textfilter',
  template: `
  Search: <input type="text" [(ngModel)]="filter" placeholder="search todos..." />
  `,
  styleUrls: ['./textfilter.component.css']
})
export class TextfilterComponent implements OnInit {
  private _filter: string;
  
  @Input() get filter() {
    return this._filter;
  }

  set filter(val:string) {
    this._filter=val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
