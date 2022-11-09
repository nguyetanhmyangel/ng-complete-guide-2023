import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element!: { type: string; name: string; content: string };
  @Input() name: string | undefined;
  @ViewChild('heading', { static: true }) header!: ElementRef<HTMLDivElement>;
  @ContentChild('contentParagraph', { static: true })
  paragraph!: ElementRef<HTMLParagraphElement>;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(
      `Text Content of Paragraph: ${this.paragraph.nativeElement.textContent}`
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log(
      `Text Content of Paragraph: ${this.paragraph.nativeElement.textContent}`
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
    // This is even earlier than what Max explains in the video. The text content is
    // available after the content has been checked. Which is one step before AfterViewInit
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
