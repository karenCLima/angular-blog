import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  Photo:string = ""
  @Input()
  title:string = ""
  @Input()
  author:string = ""
  @Input()
  tag1:string = ""
  @Input()
  tag2: string = ""
  @Input()
  tag3: string =""
  @Input()
  Id:string = "0"
  
  ngOnInit(): void {
    ;
  }

}
