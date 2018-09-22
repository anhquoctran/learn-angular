import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcumb } from './breadcumb';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcumbComponent implements OnInit {
  
  	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
	public static breadcrumbs: Array<Breadcumb> = [];

  	subscripbeEvents = this.router.events
    	.pipe(filter(event => event instanceof NavigationEnd))
    	.subscribe(() => {
			BreadcumbComponent.breadcrumbs = BreadcumbComponent.buildBreadCrumb(this.activatedRoute.root);
    });

	ngOnInit() {

	}

	getBreadCrumbs() {
		return BreadcumbComponent.breadcrumbs;
	}

	public static buildBreadCrumb(
		route: ActivatedRoute,
		url: string = '',
		bcs: Array<Breadcumb> = [],
	): Array<Breadcumb> {

		const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Home';
		const path = route.routeConfig ? route.routeConfig.path : '';

		const nextUrl = `${url}${path}/`;

		if(nextUrl === '//') return [...bcs];
		const breadcum = {
			label: label,
			url: nextUrl,
		};

    	const newBreadcumbs = [...bcs, breadcum];
    	if (route.firstChild) {
      		return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcumbs);
    	}

    	return newBreadcumbs;
  	}
}
