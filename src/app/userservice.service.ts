
import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos} from './repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos: Repos;

  constructor( private http:HttpClient) {
    this.foundUser = new User("", "","", "", 0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
   }
   searchUser(searchName: string){

    interface ApiResponce {
      url: any;
      login: any;
      html_url: any;
      location:any;
      public_repos:any;
      followers:any;
      following:any;
      avatar_url:any;
      created_at:Date;

    }
    return new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponce>('https://api.github.com/users/'+searchName+'?'+environment.apiKey).toPromise().then(
        (result:any)=>{
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      );
    });
   }
   getReopos(searchName: string){
     interface Repos{
       name:string;
       html_url:string;
       description:string;
       forks:number;
       watchers_count:number;
       language:string;
       created_at:Date;
     }
     return new Promise<void>((resolve, reject)=>{
       this.http.get<Repos>('https://api.githib.com/users/'+searchName+"?"+environment.apiKey).toPromise().then(
         (results: any)=>{
           this.allRepos = results;
           resolve();
         },
         (error)=>{
           console.log(error);
           reject();
         }
       );
     });
   }

}
