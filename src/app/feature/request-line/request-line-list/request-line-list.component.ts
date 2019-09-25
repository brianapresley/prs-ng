import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { RequestLine } from '../../../model/request-line.class';
import { RequestLineService } from '../../../service/request-line.service';
import { Request } from '../../../model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  request: Request;
  products: Product[];
  requestLine: RequestLine = new RequestLine
  rlid: number;
  rid: number;
  title = 'Request-Lines List';

  constructor(private requestSvc: RequestService,
              private rlSvc: RequestLineService,
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //Get the id from the request, get the associated request record
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request = resp as Request;
        console.log('request detail: '+this.rlid);
      })
    });

  }
  // create() {
  //   this.requestLine.requestId = this.request.id;
  //   this.requestLine.request = null;
  //   console.log(this.request);
  //   this.rlSvc.create(this.requestLine).subscribe ( resp => {
  //     //success
  //     console.log(resp);
  //     this.router.navigateByUrl('/request/request-line');
  //   },
  //   err => {
  //     //error
  //     console.log(err);
  //   }
  //   );
  // }
  // remove(requestLine: RequestLine): void {
  //   this.requestLineSvc.delete(this.requestLine)
  //     .subscribe(
  //       resp => {
  //         console.log("Request line delete success: ", resp);
  //         this.refresh();
  //       },
  //       err => {
  //         console.error("Request line delete failed!: ", err);
  //       }
  //     );
  // }
  // refresh(): void {
  //   this.requestSvc.get(this.requestSvc.id.toString())
  //     .subscribe(resp => {
  //       this.requestLine = resp;
  //     })
   }

  
  


