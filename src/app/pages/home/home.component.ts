import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = history.state.data;
    if (this.data == undefined) {
      this.router.navigate(['/']);
    }
  }
}
