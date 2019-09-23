import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  title: string = 'Request-Create';
  user: User;
  dm: string[] = ['Mail','Pickup'];
  status: string[] = ['New', 'Request Denied', 'Pending', 'Approved']
  constructor(private requestSvc: RequestService, 
              private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    console.log(this.user);
  
  }
  create() {
    this.request.userId = this.user.id;
    this.request.user = null;
    console.log(this.request);
    this.requestSvc.create(this.request).subscribe ( resp => {
      //success
      console.log(resp);
      this.router.navigateByUrl('/request/list');

    },
    err => {
      //error
      console.log(err);
    }
    );
  }
}
