import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section-5';
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  public onServerAdded(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: 'serverData name: ' + serverData.name,
      content: 'serverData content: ' + serverData.content,
    });
  }

  public onBlueprintAdded(blueprintData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: 'blueprintData Name: ' + blueprintData.name,
      content: 'blueprintData content: ' + blueprintData.content,
    });
  }

  public onChangeFirst() {
    this.serverElements[0].name = 'Name Changed!';
  }

  public onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
