import { Repos } from '../repos';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo!: Repos;

  constructor( public repoService:UserserviceService) { }

  repoSearch(searchName: string){
    this.repoService.getRepository(searchName).then(
      (results: any)=>{
        this.repo=this.repoService.allRepos
        console.log(this.repo);
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void{
    this.repoSearch('kojwangbora');
  }

}
