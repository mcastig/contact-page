import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  titleContact = 'Interested in our business pricing?';
  subtitleContact = 'Fill out the form to view details and we’ll contact you as soon as possible.';
}
