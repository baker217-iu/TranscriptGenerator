import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';

@Component({
  selector: 'app-microsite',
  templateUrl: './microsite.component.html',
  styleUrls: ['./microsite.component.css']
})



export class MicrositeComponent implements OnInit {

  campus: any;
  semester: any;
  school: any;
  grade: any;
  modeofinstruction: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.grade)
  }
  test(): void {
    console.log(this.grade)

  }
  downloadMyFile(){
    const link = document.createElement('a');
    var api = "http://localhost:5000/api/CourseController";
    link.setAttribute('target', '_blank');
    link.setAttribute('href', api +"/" + this.campus +"/" + this.semester +"/" + this.grade +"/" + this.school +"/" + this.modeofinstruction);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
