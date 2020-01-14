import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  links;
  currentUrl = "";

  constructor(private config: ConfigService, private router: Router) {

    this.links = config.links;
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.currentUrl = ev.url;
      }
    })

  }



  ngOnInit() {


  }

  isActiveUrl(link) {
    if (this.currentUrl === '/') {
      return link.href === this.currentUrl;
    }
    if (this.currentUrl.includes(link.href)) {
      return true
    }
    return false
  }

}
