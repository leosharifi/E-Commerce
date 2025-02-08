import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToolTip]',
  standalone: true
})
export class TooltipDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { };

  @Input('toolTip') addToolTip: string = '';

  displayToolTip(): HTMLElement {
    const toolTipTElement = this.renderer.createElement('div');
    let toolTipText = this.renderer.createText(this.addToolTip);
    this.renderer.appendChild(toolTipTElement, toolTipText);
    return toolTipTElement;
  }

  @HostListener('mouseover')
  mouseOverEvent() {
    const element = this.displayToolTip()
    this.renderer.appendChild(this.el.nativeElement, element)
  }

  @HostListener('mouseout')
  mouseOutEvent() {
  }
}