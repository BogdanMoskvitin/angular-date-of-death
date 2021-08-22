import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  count: number;
  url: string = "https://swapi.dev/api/people/1";
  user: User;
  isActive: boolean = false;

  constructor(private http: HttpClient) {
    this.count = 0;
  }

  ngOnInit(): void {
    setInterval( () => {
      this.count < 100 ? this.count += 1 : clearInterval(); 
    }, 20);
  }
  callSrv() {
    this.isActive = true;
    return this.http.get(this.url).subscribe((data:User) => this.user = data);
  }
}