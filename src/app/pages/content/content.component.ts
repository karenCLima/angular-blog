import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input()
  author:string = ""
  @Input()
  Photo:string = ""
  @Input()
  title:string = ""
  @Input()
  description:string = ""
  @Input()
  tag1:string =""
  @Input()
  tag2:string =""
  @Input()
  tag3:string =""

   Id:string | null = "0"

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.Id = value.get("id"))
      this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article =>
      article.id == id)[0]
      this.title = result.title
      this.author = result.author
      this.description = result.description
      this.Photo = result.Photo
      this.tag1 = result.tag1
      this.tag2 = result.tag2
      this.tag3 = result.tag3
  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

