import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User;
  repo: Repos|any;

  constructor( public myService: UserserviceService, private repoService: UserserviceService) { }

  searchs(searchName: string) {
    this.myService.searchUser(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getReopos(searchName).then(

      (results: any)=>{
        this.repo = this.repoService.allRepos
        console.log(this.repo);
      },
      (error: any)=>{
        console.log(error);
      }
    );

  }

  ngOnInit(){
    this.searchs('kojwangbora')
  }

}
