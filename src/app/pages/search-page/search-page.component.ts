import { Component } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  title = 'tik-talk';
  profileService = inject(ProfileService); 
  profiles: Profile[] = []; 

  constructor () {
    this.profileService.getTestAccounts()
    .subscribe(
      ( val: any)=> {
        this.profiles = val 
      })
  }
}
