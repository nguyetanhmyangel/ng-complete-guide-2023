import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  featureSelected!: string;

  public onNavigate(event: string) {
    console.log('event', event);
    this.featureSelected = event;
  }
}
