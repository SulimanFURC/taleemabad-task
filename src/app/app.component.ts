import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taleemabad - Task';
  searchTerm: any;
  results: any = [];

  constructor(private wiki:WikiService) {}

  onSubmit(){
    this.wiki.search(this.searchTerm).subscribe( (res:any) =>{
     this.results = res.query.search;
     console.log(this.results);
    })
  }

}
