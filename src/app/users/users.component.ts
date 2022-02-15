import { Component, OnInit } from '@angular/core';
import { Repo } from '../repos';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User;
  repos: any;

  constructor( public myService: UserserviceService, private repoService: UserserviceService) { }

  searchs(searchName: string) {
    this.myService.searchUser(searchName).then(
      (_success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getRepository(searchName).then(

      (_results: any)=>{
        this.repos = this.repoService.allRepos
        console.log(this.repos);
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
