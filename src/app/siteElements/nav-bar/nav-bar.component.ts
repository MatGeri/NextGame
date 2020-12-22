import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, NavigationEnd } from '@angular/router';
import { DiscordService } from 'src/app/services/discord.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  links;
  currentUrl = "";
  onlineMemberCount : string;

  constructor(private config: ConfigService, private router: Router, private discordJSON : DiscordService) {

    this.links = config.links;
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.currentUrl = ev.url;
      }
    })
  }



  ngOnInit() {
    this.discordJSON.loadDiscordWidgetDataInJSON().subscribe( jsonData => this.onlineMemberCount = jsonData.presence_count);
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
