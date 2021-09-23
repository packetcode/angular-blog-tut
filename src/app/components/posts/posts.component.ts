import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
// import { Posts } from '../../mock-posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  @Input() colClass: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((retrievedData) => this.posts = retrievedData); 
  }

  deletePost(post: any){
    this.postService.deletePost(post.id).subscribe(() => this.posts = this.posts.filter(
      (p:any) => p.id != post.id
    ));
  }

}
