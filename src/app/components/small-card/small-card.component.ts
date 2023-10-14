import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  Photo:string = ""
  @Input()
  title:string =  ""
  @Input()
  description: string =" "
  @Input()
  tag1:string = ""
  @Input()
  tag2:string = ""
  @Input()
  tag3:string = ""
  @Input()
  Id:string = "0"


  ngOnInit(): void {
    ;
  }

}
