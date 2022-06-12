import { Component, OnInit } from '@angular/core';

// import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-crud';

  constructor() {}

  // constructor(private api: ApiService) {}
  ngOnInit(): void {
    //this.getAllProducts();
  }

  // getAllProducts() {
  //   this.api.getProduct().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (error) => {
  //       alert(`Error ${error}: while fetching products`);
  //     },
  //   });
  // }
}
