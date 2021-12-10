import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 authorDetail: any = {};
 id: any = {};
 new: any = {name: ""};

 identifier:string = "";
 editData:any={ name:""};
 finalmessage="";
 error="";


  constructor(private _httpService: HttpService, private _route:ActivatedRoute, private_router:Router){}

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor(){
    this._route.params.subscribe((params:any) => {this.id = params});
    this._httpService.getbyId(this.id.id)
    .subscribe((data:any)=>{
      this.authorDetail = data;        
    });  
  }
 
  edit( event: any ): void {
    this.identifier = event.target.id.value;
    if(this.editData.length < 3 ){
      this.error="the name must be at least 3 letters.";
    }
    else{
      console.log(this.identifier, this.editData);
      this._httpService.edit(this.identifier, this.editData)
      .subscribe((data:any) =>{
        this.error="Successful change.";
      });
    }   
  }
}
