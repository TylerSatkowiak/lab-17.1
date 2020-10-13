import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'lab171';
  newPost : Post;


  ideas: Post[]=[
    {title: 'Work From Home', thought: 'love working from home, office be damned'},
    {title: 'Eat Ham', thought: 'eating ham is great, you should eat more ham'},
    {title: 'Love Balloons', thought: 'who doesnt love balloons? Monsters thats who'}
  ];

  clickResults = function(p: Post){
    this.newPost = {title: p.title, thought: p.thought};
    this.ideas.push(this.newPost);   
  }

}
