import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appFundo]'  
})
export class FundoDirective {
  private defaultColor: string = 'white';  
  private hoverColor: string = '#e0e0e0';  

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.hoverColor); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(this.defaultColor);
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }
}
