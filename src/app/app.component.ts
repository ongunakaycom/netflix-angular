import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

// Declare slick method globally for jQuery
declare global {
  interface JQuery {
    slick(options?: any): any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'myapp';

  // Trending Now Array with Images
  trendingNow = [
    { name: 'Squid Game', rank: 1, image: '/images/squid-game.webp' },
    { name: 'Lovers Anonymous', rank: 2, image: '/images/anonymous-love.webp' },
    { name: 'Recep Ivedik 7', rank: 3, image: '/images/recep-ivedik.webp' },
    { name: 'The Life and Movies of Erşan Kuneri', rank: 4, image: '/images/ersan-kuneri.webp' },
    { name: 'Back in Action', rank: 5, image: '/images/back-action.webp' },
    { name: 'The Walking Dead', rank: 6, image: '/images/walking-dead.webp' },
    { name: 'Asaf', rank: 7, image: '/images/asaf.webp' },
    { name: 'Prison Break', rank: 8, image: '/images/prison-break.webp' },
    { name: 'Uncharted', rank: 9, image: '/images/uncharted.webp' },
    { name: 'The Night Agent', rank: 10, image: '/images/night-agent.webp' }
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
      mediaSrc: '/images/feature-3.png',
      isVideo: false
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

  // Slick Carousel initialization after view is initialized
  ngAfterViewInit() {
    // Initialize Slick Carousel for Trending Now
    $('.trending-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}
