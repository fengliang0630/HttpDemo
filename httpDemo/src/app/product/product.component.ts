import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dataSource: Observable<any>;
  private products: any[];

  constructor(private http: Http) {
    this.dataSource = http.get('/api/getAllProducts').map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => {
      this.products = data;
    });
  }

}
