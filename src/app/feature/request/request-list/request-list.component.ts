import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { UserService } from '@svc/user.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Request[];
  sortCriteria = 'request';
  sortOrder = 'asc';
  title ='Request List';

  constructor(private requestSvc: RequestService,
              private userSvc: UserService) { }

  ngOnInit() {
    //populate list of requests
    this.requestSvc.list().subscribe(
      resp => {
        this.requests = resp;
        console.log(this.requests);
      }
    );
  }
  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
