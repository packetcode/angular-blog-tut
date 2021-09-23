import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post1: any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeletePost.emit();
  }

}
