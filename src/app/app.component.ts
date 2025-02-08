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

  // Trending Now Array
  trendingNow = [
    { name: 'Squid Game', rank: 1 },
    { name: 'Lovers Anonymous', rank: 2 },
    { name: 'Recep Ivedik 7', rank: 3 },
    { name: 'The Life and Movies of Erşan Kuneri', rank: 4 },
    { name: 'Back in Action', rank: 5 },
    { name: 'The Walking Dead', rank: 6 },
    { name: 'Asaf', rank: 7 },
    { name: 'Prison Break', rank: 8 },
    { name: 'Uncharted', rank: 9 },
    { name: 'The Night Agent', rank: 10 }
  ];

  // Features Section
  features = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      mediaSrc: '/images/header-image.png',
      isVideo: false
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      mediaSrc: '/images/feature-2.png',
      isVideo: false
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      mediaSrc: '/videos/watch-everywhere.mp4',
      isVideo: true
    },
    {
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them.',
      mediaSrc: '/images/feature-4.png',
      isVideo: false
    }
  ];

  // FAQs Section
  faqs = [
    { id: 'faq1', question: 'What is Netflix?', answer: 'Netflix is a streaming service offering a variety of award-winning TV shows, movies, anime, and more.' },
    { id: 'faq2', question: 'How much does Netflix cost?', answer: 'Netflix offers various plans to suit your needs. Visit our website for current pricing.' },
    { id: 'faq3', question: 'Where can I watch?', answer: 'You can watch anywhere, anytime on an unlimited number of devices.' },
    { id: 'faq4', question: 'How do I cancel?', answer: 'Cancel anytime with no extra fees. Your account will remain active until the end of your billing period.' },
    { id: 'faq5', question: 'What can I watch on Netflix?', answer: 'Netflix has a huge library of movies, TV shows, documentaries, and more.' },
    { id: 'faq6', question: 'Is Netflix good for kids?', answer: 'Yes! Netflix Kids offers a safe space for children with parental controls.' }
  ];

  // Footer Links
  footerLinks = [
    ['Home', 'Terms of Use', 'Privacy Policy'],
    ['Help Center', 'Account', 'Jobs'],
    ['Press', 'Contact Us', 'Gift Cards']
  ];
}
