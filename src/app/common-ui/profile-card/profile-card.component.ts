import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importă CommonModule
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe], // Adaugă CommonModule în imports
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}