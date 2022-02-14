import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  SearchName:string;
  @Output() searchOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit(){
    this.searchOutput.emit(this.SearchName);
    this.SearchName = "";
  }

}
