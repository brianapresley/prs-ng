import { Component, OnInit } from '@angular/core';
import { Request } from '../../../model/request.class';
import { Product } from '../../../model/product.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../service/request.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  rlid: number;
  rid: number;
  status: string;
  title: string = 'Request-Review Decision';
  request: Request;
  products: Product[];
  constructor(private rSvc: RequestService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let rid = this.route.snapshot.params.id;
    this.rSvc.get(rid).subscribe(resp => {
      this.request = resp as Request;

    });
  }
  approve() {
    this.request.status = "Approved";
    this.rSvc.approve(this.request).subscribe(resp => {
      this.router.navigateByUrl('/review/list')
    });
  }
  reject() {
    this.request.status = "Declined";
    console.log("Request B4 Reject:", this.request);
    this.rSvc.reject(this.request).subscribe(resp => {
      console.log(this.request)
    });
  }
  savereject() {
    this.request.status = "Declined";
    this.rSvc.reject(this.request).subscribe(resp => {
      this.router.navigateByUrl('/review/list')
    })
  
  }
}


