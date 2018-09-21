import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcum } from './breadcum';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcumComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  	breadcrumbs$ = this.router.events
  	.pipe(
		filter(event => event instanceof NavigationEnd)
	).subscribe(() => {
		this.buildBreadCrumb(this.activatedRoute.root)
	});

	ngOnInit() {}

	buildBreadCrumb(
		route: ActivatedRoute,
		url: string = '',
		breadcums: Array<Breadcum> = [],
	): Array<Breadcum> {
    const label = route.routeConfig
      ? route.routeConfig.data['breadcum']
      : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;
    const breadcum = {
      label: label,
      url: nextUrl,
    };

    const newBreadcums = [...breadcums, breadcum];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcums);
    }

    return newBreadcums;
  }
}
