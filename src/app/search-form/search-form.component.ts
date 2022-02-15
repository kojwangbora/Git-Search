import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName!: string;
  @Output() searchOutput = new EventEmitter<any>()


  constructor() { }

  ngOnInit(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}
