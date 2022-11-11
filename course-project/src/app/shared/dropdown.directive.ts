import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: "appDropDown"
})
export class DropdownDirective {
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  private wasInside = false;

  @HostBinding("class.show") isOpen = false;

  // @HostListener("click") toggleOpen() {
  //   this.isOpen = !this.isOpen;
  //   this.wasInside = true;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    this.wasInside = true;
  }
  constructor(private elRef: ElementRef) {}

}
