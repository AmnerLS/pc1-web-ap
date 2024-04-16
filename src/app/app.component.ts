import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {HeaderContentComponent} from "./public/components/header-content/header-content.component";
import {UserListComponent} from "./users/components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterContentComponent, HeaderContentComponent,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pc1-web-ap';
}
