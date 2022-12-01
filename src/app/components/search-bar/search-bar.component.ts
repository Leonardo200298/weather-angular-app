import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() submitQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public sendQuery(query:string):void{
    this.submitQuery.emit(query);
  }

}
