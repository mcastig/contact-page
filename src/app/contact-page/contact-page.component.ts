import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  titleContact = 'Interested in our business pricing?';
  subtitleContact = 'Fill out the form to view details and we’ll contact you as soon as possible.';
}
