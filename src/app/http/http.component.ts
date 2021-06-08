import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { List}from '../http.interface';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

 user:any;
  constructor(private _httpservice:HttpService) {
   
   }
   listpr(){
    this._httpservice.listoff()
    .subscribe((data)=>{this.user=data;
  console.log(this.user)});
   }

  ngOnInit(): void {
  }

}
