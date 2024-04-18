import { Component, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent {
  private usersService = inject(UsersServiceService);
  userId = signal(1);
}
