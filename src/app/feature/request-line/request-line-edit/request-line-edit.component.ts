import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLine } from '@model/request-line.class';
import { RequestLineService } from '@svc/request-line.service';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  requestLine: RequestLine;
  rlid: number;
  rid: number;
  title: string = 'Request Line-Edit';
  request: Request;
  products: Product[];

  constructor( private rlSvc: RequestLineService,
               private productSvc: ProductService,
               private router: Router, 
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.rlid = params.id);
    this.rlSvc.get(this.rlid).subscribe(resp => {
      this.requestLine = resp as RequestLine;
      this.rid = this.requestLine.requestId;
      this.productSvc.list().subscribe(presp => {
        this.products = presp as Product[];
      });
    });
  }
  edit() {
    this.requestLine.productId = this.requestLine.product.id;
    this.requestLine.product = null;
    this.rlSvc.edit(this.requestLine).subscribe(resp => {
      this.requestLine = resp as RequestLine;
      this.router.navigateByUrl('/request/request-line/'+this.rid);
    });
  }

  compareFn(p1: number, p2: number): boolean {
    return p1 === p2;
  }

  
}
