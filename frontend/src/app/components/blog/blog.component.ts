import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  messageData;
  newPost = false;
  loadingBlogs = false;
  commentForm;
  username;
  user;
  proccessing = false;
  titlee;
  bodyy;
  blogsPosts;
  Blogs;
  newComment = [];
  enableComments = []

  constructor() { }
  namePattern = /^[a-zA-Z0-9 ]+$/;

  ngOnInit() {
  }

  newBlogForm(){
    this.newPost = true
  }

  reloadBlogs(){
    this.loadingBlogs = true;
    window.location.reload();
    setTimeout(() => {
      this.loadingBlogs = false
    }, 4000);
  }



  saveBlogs(){
    this.loadingBlogs = true;
    setTimeout(() => {
      this.loadingBlogs = false
    }, 1000);
  }

  goBack(){
    window.location.reload()
  }


  collapse(id){
    const index = this.enableComments.indexOf(id);
    this.enableComments.splice(index , 1)
  }

  cancleSubmittion(id){
    const index = this.newComment.indexOf(id)
    this.newComment.splice(index , 1);
    this.proccessing = false;
  }

}
