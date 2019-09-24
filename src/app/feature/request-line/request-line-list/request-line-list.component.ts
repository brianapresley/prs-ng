import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { RequestLine } from '../../../model/request-line.class';
import { RequestLineService } from '../../../service/request-line.service';
import { Request } from '../../../model/request.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  request: Request;
  title = 'Request-Lines List';

  constructor(private requestSvc: RequestService,
              private requestLineSvc: RequestLineService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //Get the id from the request, get the associated request record
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request= resp as Request;
        console.log('request detail: '+this.request.id);
      })
    });

  }
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
  // }
}
  
  


