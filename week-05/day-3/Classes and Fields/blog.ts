// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost } from '../Data Structures/BlogPost';

class Blog {
  blogPosts: BlogPost[];

  constructor() {
    this.blogPosts = [];
  }

  add(inputBlogItem: BlogPost) {
    return this.blogPosts.push(inputBlogItem);
  }

  delete(deleteBlogItem: number) {
    for (let i: number = 0; i < this.blogPosts.length; i++) {
      if (i === deleteBlogItem) {
        this.blogPosts.splice(deleteBlogItem, 1);
      }
    }
    return this.blogPosts;
  }

  update(deleteBlogItem: number, inputBlogItem: BlogPost) {
    for (let i: number = 0; i < this.blogPosts.length; i++) {
      if (i === deleteBlogItem) {
        this.blogPosts.splice(deleteBlogItem, 1, inputBlogItem);
      }
    }
    return this.blogPosts;
  }
}
