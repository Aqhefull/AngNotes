import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverNoteColor]'
})
export class HoverNoteColorDirective {
  @HostBinding('class.note-color-hovered') isHovered = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
