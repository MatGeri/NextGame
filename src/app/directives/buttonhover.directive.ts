import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonhover]'
})
export class ButtonhoverDirective {

  constructor( private er: ElementRef) { }

  @HostListener('mouseover') onHover() {
   
    (this.er.nativeElement as HTMLButtonElement).classList.remove('btn-outline-primary');
    (this.er.nativeElement as HTMLButtonElement).classList.add('btn-primary');
  }
  @HostListener('mouseout') onOut() {
    (this.er.nativeElement as HTMLButtonElement).classList.remove('btn-primary');
    (this.er.nativeElement as HTMLButtonElement).classList.add('btn-outline-primary');
  }

}
