import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    { title: 'Counter', router: 'counter' },
    { title: 'User Info', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ];
}
