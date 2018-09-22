import { Component, OnInit, Input } from '@angular/core';
import { Breadcumb } from '../breadcum/breadcumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input()
  appName: string;

  pages: Array<Breadcumb> = [];

  constructor(private router: Router) {}

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
