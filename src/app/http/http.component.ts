import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { HttpClient} from '@angular/common/http';
import { List}from '../http.interface';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

 user:any;
 puser:any;
  
    //  get
   listpr(){
    this._httpservice.listoff()
    .subscribe((data)=>{this.user=data;
  console.log(this.user)});
   }
   listp(){
     this._httpservice.photolist()
     .subscribe((data)=>this.puser=data);

   }

   //  post
   name:any;
  postData={test:'my data list',
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"}
      
      };
  posurl="https://httpbin.org/post";
  json:any;
   constructor(private _httpservice:HttpService, private _httppost:HttpClient) {
   
    this._httppost.post(this.posurl,this.postData).toPromise().then((data)=>{
    
      console.log(data);
      this.json=JSON.stringify(this.postData);
      this.json=this.json.replace(/[{}]/g,'')
    })
  }

  postname(){
    this._httppost.post(this.posurl,{name:this.name}).toPromise().then((data)=>{
      console.log(data);
      this.json=JSON.stringify(this.name);
    })
  }
   
  


  ngOnInit(): void {
  }

}
