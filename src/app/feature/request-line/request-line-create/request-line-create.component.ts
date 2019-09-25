import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../../../model/request-line.class';
import { Product } from '../../../model/product.class';
import { RequestLineService } from '../../../service/request-line.service';
import { RequestService } from '../../../service/request.service';
import { Request } from '../../../model/request.class';
import { ProductService } from '../../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  requestLine: RequestLine = new RequestLine();
  rid: number;
  title: string = 'Request Line-Create';
  products: Product[];

  constructor(private rlSvc: RequestLineService,
              private requestSvc: RequestService,
              private productSvc: ProductService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.rid = this.route.snapshot.params.id;
    this.productSvc.list().subscribe(presp => {
      this.products = presp as Product[];
      console.log("Products:", this.products);
    });
  
   
  }
  create() {
    this.requestLine.requestId = this.rid;
    
    console.log("Before Create: ", this.requestLine);
    this.rlSvc.create(this.requestLine).subscribe ( resp => {
      //success
      console.log("rc", resp);
      this.router.navigateByUrl('/request/request-line/'+this.rid);
    },
    err => {
      //error
      console.log(err);
    }
    );
  }
  compareFn(p1: number, p2: number): boolean {
    return p1 === p2;
}}
