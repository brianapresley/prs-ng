import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();
  title: string = 'Request-Detail';
  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
        // Get the id from the web request, get the associated request record
        this.route.params.subscribe(parms => {
          this.requestSvc.get(parms.id).subscribe(resp => {
            this.request = resp as Request;
            console.log('request detail: '+this.request.id);
          })
        });
  }
  remove() {
    this.requestSvc.delete(this.request.id).subscribe(resp => {
      alert('Request '+this.request.id+' successfully deleted!')
      this.router.navigateByUrl('/request/list');
    },
    
    err => {
      console.log('error deleting request');
      console.log(err);

    });
  }

}
