import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { User } from '../../../model/user.class';


@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  title: string = 'Request-Edit';
  user: User;
  dm: string[] = ['Mail','Pickup'];
  status: string[] = ['New', 'Request Denied', 'Pending', 'Approved']
  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the request id from web request, get request from db
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request = resp as Request;
        console.log('request edit: '+this.request.id);
      })
    });

  }
  edit() {
    this.requestSvc.edit(this.request).subscribe ( resp => {
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
