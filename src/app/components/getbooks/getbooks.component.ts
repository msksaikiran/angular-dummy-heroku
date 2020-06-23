import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-getbooks",
  templateUrl: "./getbooks.component.html",
  styleUrls: ["./getbooks.component.scss"],
})
export class GetbooksComponent implements OnInit {
  //bookList: Array<Book> = [];
  bookList = [
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
  ];
  sort: any = "Sort by relevance";
  sortTech1: any = "Price : Low to High";
  sortTech2: any = "Price : High to Low";
  sortTech3: any = "Newest Arrivals";
  length: number = 0;
  page: number = 2;
  endPage: number = 1;
  // pages: Array<Number> = [];
  pages = [
    {
      number: 1,
    },
    {
      number: 2,
    },
  ];
  constructor(
    //private bookService: BookService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.sort;
    //this.getBooksCount();
    this.getAvailableBooks();
  }
  nextPage() {
    this.page = this.page + 1;
    this.doSorting(this.sort);
  }
  previousPage() {
    this.page = this.page - 1;
    this.doSorting(this.sort);
  }
  getBooksCount() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
    // this.bookService.getBooksCount().subscribe((response: any) => {
    //   this.length = response["obj"];
    //   if (this.length > 10) {
    //     for (var i = 1; i <= this.length / 12 + 1; i++) {
    //       this.pages[i] = i;
    //     }
    //     this.endPage = this.pages.length - 2;
    //   }
    // });
  }
  doSorting(option: any) {
    this.sort = option;
    if (option == "Sort by relevance") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Price : High to Low";
      this.sortTech3 = "Newest Arrivals";
      this.getAvailableBooksOfPage(this.page);
    }
    if (option == "Price : Low to High") {
      this.sortTech1 = "Price : High to Low";
      this.sortTech2 = "Sort by relevance";
      this.sortTech3 = "Newest Arrivals";
      // this.bookService
      //   .getBooksSortedByPriceLow(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
    if (option == "Price : High to Low") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Sort by relevance";
      this.sortTech3 = "Newest Arrivals";
      // this.bookService
      //   .getBooksSortedByPriceHigh(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
    if (option == "Newest Arrivals") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Price : High to Low";
      this.sortTech3 = "Sort by relevance";
      // this.bookService
      //   .getBooksSortedByArrivals(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
  }
  books: [
    {
      bookAddedTime: "2020-06-01T11:22:34";
      bookApproveStatus: false;
      bookAuthor: "The Imaginater";
      bookDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata";
      bookId: 3;
      bookImage: "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg";
      bookName: "Imaginate update";
      bookPrice: 2000;
      bookUpdatedTime: "2020-06-04T19:19:39";
      bookVerified: true;
      noOfBooks: 0;
      reviewRating: [];
      sellerName: "Saikiran";
    }
  ];

  getAvailableBooks() {
    // this.bookService.getAvailableBooks().subscribe((response: any) => {
    //   this.bookList = response["obj"];
    // });
  }
  getAvailableBooksOfPage(pageNo: number) {
    // this.bookService
    //   .getAvailableBooksOfPage(pageNo)
    //   .subscribe((response: any) => {
    //     this.bookList = response["obj"];
    //     this.page = pageNo;
    //   });
  }
}