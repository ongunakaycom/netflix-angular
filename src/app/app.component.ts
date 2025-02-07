import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Just keep CommonModule
// Remove RouterOutlet import if you're not using routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // Only include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}
