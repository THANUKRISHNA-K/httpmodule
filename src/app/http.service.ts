import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from'rxjs';
import { List } from './http.interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  listoff(){
    let url="https://jsonplaceholder.typicode.com/users";
  return this.httpclient.get(url);
  

}
}