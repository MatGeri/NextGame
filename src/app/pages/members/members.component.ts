import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { DiscordService } from 'src/app/services/discord.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],

})
export class MembersComponent implements OnInit {

  constructor(private discordData : DiscordService, private changeDetectorRef: ChangeDetectorRef) { }
  onlineMembers : Member[];
  onlineMembers$ : Observable<Member[]>;

  ngOnInit() {
    this.discordData.loadDiscordWidgetDataInJSON().subscribe( data => {this.onlineMembers = data.members;
     });
     this.changeDetectorRef.detectChanges();
    
  }

 
}
