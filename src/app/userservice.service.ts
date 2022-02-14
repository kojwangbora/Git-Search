import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { error } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos: Repos;

  constructor( private http: HttpClientModule) {
    this.foundUser = new User("", "", "", 0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
   }
   searchUser(searchName: string){

    interface Responce {
      url: string,
      login: string;
      html_url: string;
      location:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;

    }

    return new Promise((resolve, reject)=>{
      this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result)=>{
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
   getRepository(searchName){
     interface Repos{
       name:string;
       html_url:string;
       description:string;
       forks:number;
       watchers_count:number;
       language:string;
       created_at:Date;
     }
     return new Promise((resolve, reject)=>{
       this.http.get<Repos>('https://api.githib.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
         (results)=>{
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
