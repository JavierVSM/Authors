import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  id:string = "";
  authors: any[] = [];


  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    this._httpService.getAll()
    .subscribe((data:any)=>{
      this.authors = data;          
    });
  }

  deleteAuthor(event:any):void{
    this.id = event.target.id.value;
    this._httpService.delete(this.id)
    .subscribe((data:any) =>{
      location.reload();
      console.log(data);
    });
  }
}
