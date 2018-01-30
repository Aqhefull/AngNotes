import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverNote]'
})
export class HoverNoteDirective {
  @HostBinding('class.note-hovered') isHovered = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
