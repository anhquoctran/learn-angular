import { Component, OnInit, Input } from '@angular/core';
import { Breadcumb } from '../breadcum/breadcumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  pages: Array<Breadcumb> = [];

  ngOnInit() {
    this.getAllRoutes();
  }

  getAllRoutes(): void {
    for (let i = 0; i < this.router.config.length; i++) {
      let route = this.router.config[i];
      let itemMenu = {
        url: route.path === '' ? '/' : route.path,
        label: !route.data || route.data['breadcrumb'] === '' ? 'Home' : route.data['breadcrumb'],
      };

      this.pages.push(itemMenu);
    }
  }
}
