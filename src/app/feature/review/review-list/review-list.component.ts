import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { UserService } from '@svc/user.service';
import { SystemService } from '../../../service/system.service';
import { ReviewService } from '../../../service/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  uid: number;
  requests: Request[];
  sortCriteria = 'request';
  column = 'Status';
  title ='Review List';

  constructor(private requestSvc: RequestService,
              private reviewSvc: ReviewService,
              private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit() {
   let uid = this.sysSvc.data.user.instance.id;
    this.requestSvc.reviews(uid).subscribe(
      resp => {
        this.requests = resp;
        console.log(this.requests);
      }
    );
  }
  // sortBy(column: string): 'Revised'; {
  //   if (this.sortCriteria === column) {
  //     this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
  //   } else {
  //     this.sortCriteria = column;
  //     this.sortOrder = 'asc';
  //  }
  //}
}
