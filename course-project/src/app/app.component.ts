import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  loadedFeature: string ='recipe';

  public onNavigate(event: string) {
    console.log('event', event);
    this.loadedFeature = event;
  }
}
