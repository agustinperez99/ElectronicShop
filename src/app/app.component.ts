import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, ContactComponent],
  template: `
  <div class="container">
  <header>
    <h1>{{ title }}</h1>
    <nav>
        <a class="button" routerLink="/home" routerLinkActive="activeButton">Home</a>
        <a class="button" routerLink="/contact" routerLinkActive="activeButton">Contact</a>
      </nav>
  </header>
  <main>
    <router-outlet></router-outlet>
  </main>
</div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eletronic Shop';
}
