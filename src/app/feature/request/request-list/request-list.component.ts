import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Request[];
  status: string;
  request: Request;
  sortCriteria = 'request';
  sortOrder = 'asc';
  title ='Request List';

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private router: Router) { }

  ngOnInit() {
    //populate list of requests
    this.requestSvc.list().subscribe(
      resp => {
        this.requests = resp;
        console.log(this.requests);
      }
    );
  }
submit() {
    this.request.status = "Review";
    this.requestSvc.submit(this.request).subscribe(resp => {
      this.router.navigateByUrl('/review/list')
    });
  }
}
