import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Post} from '../Post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  title = '';
  thought = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitPost = function(){
    let p: Post = {title: this.title, thought: this.thought};
    this.submitted.emit(p);
    
    //this.submitted.emit(`${this.title} ${this.thought}`);
  }
}
