// src/app/app.component.ts 

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  // Define features array
  features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      mediaSrc: 'path/to/media.mp4',  // Could be a video or image
      isVideo: true
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      mediaSrc: 'path/to/image.jpg',
      isVideo: false
    }
    // Add more features as necessary
  ];

  // Define FAQs array
  faqs = [
    { id: 'faq1', question: 'What is Netflix?', answer: 'Netflix is a streaming service.' },
    { id: 'faq2', question: 'How do I sign up?', answer: 'You can sign up through our website.' }
    // Add more FAQs as necessary
  ];

  // Define footerLinks array (assuming each column is an array of links)
  footerLinks = [
    ['Home', 'Terms of Use', 'Privacy Policy'],
    ['Help Center', 'Account', 'Jobs'],
    ['Press', 'Contact Us', 'Gift Cards']
  ];
}
