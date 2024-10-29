import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Contact';
}
