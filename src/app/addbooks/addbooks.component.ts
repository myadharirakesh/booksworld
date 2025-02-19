// import { Component } from '@angular/core';
// import { UserService } from '../services/user.service';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-addbooks',
//   templateUrl: './addbooks.component.html',
//   styleUrl: './addbooks.component.css'
// })
// export class AddbooksComponent {
//   bookId:any;
//   bookName:any;
//   bookPrice:any;
//   bookAuthor:any;
//   bookImage:any;
//   bookDescription:any;
//   newBook:any;
//   constructor(private service : UserService,private router :Router){}
//   addBooks(){
//     this.newBook={
//       booktId:this.bookId,
//       bookName:this.bookName,
//       bookPrice:this.bookPrice,
//       bookAuthor:this.bookAuthor,
//       bookImage:this.bookImage,
//       bookDescription:this.bookDescription
//     }
//     this.service.addBooks(this.newBook);
//     Swal.fire({
//       title:"success",
//       text:"Book successfully added",
//       icon:"success"
//     });
//     this.router.navigateByUrl('/admin/manage');
//   }

// }



import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
 import { Router } from '@angular/router';
 import Swal from 'sweetalert2';

 @Component({
  selector: 'app-addbooks',
   templateUrl: './addbooks.component.html',
   styleUrl: './addbooks.component.css'
 })
export class AddbooksComponent  {

  constructor(private service:UserService,private route:Router){}

  bookId:any;
  bookName:any;
  bookPrice:any;
  bookAuthor:any;
  bookImage:any;
  bookDescription:any;
  // genre:any;
  // year:any;
  // image:any;
  addBook:any;
  msg:any;

  add(){
    this.addBook={
    bookName:this.bookName,
    bookPrice:this.bookPrice,
    bookAuthor:this.bookAuthor,
    bookImage:this.bookImage,
    bookDescription:this.bookDescription,
    // genre:this.genre,
    // year:this.year,
    // image:this.image,
    show:false
    }
    this.service.add(this.addBook).subscribe((result)=>{
      this.msg=result;
     
      if(this.msg=="New Book Added!"){
      Swal.fire({
        title: "Added Successfully!",
        text: "Now you can see it in Home!",
        icon: "success"
      });
    }
    else{
      alert(this.msg);
    }
      this.route.navigateByUrl('admin/manage');
    });
    
    }
    
    }
