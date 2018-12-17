import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private activeRoute:ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
    });
  }

  goTo() {
    this.router.navigate(['/calc']);
  }

}
