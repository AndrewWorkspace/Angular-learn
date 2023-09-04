import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[color]'
})

export class StyleDirective {

  @Input() color: string = '';
  @Input() dsStyles!: {border?: string, fontWeight?: string, borderRadius?: string, padding?: string}

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color = 'red'
    this.renderer.setStyle(el.nativeElement, 'color', 'blue')
  }

  @HostBinding('style.color') elColor: any = null

  @HostListener('click', ['$event']) onClick(event: Event){


  }
  @HostListener('mouseenter') onEnter(){
    this.elColor = this.color ? this.color : 'orange'
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dsStyles.fontWeight)
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.dsStyles.border)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dsStyles.borderRadius)
    // this.renderer.setStyle(this.el.nativeElement, 'padding', this.dsStyles.padding)
  }
  @HostListener('mouseleave') onLeave(){
    this.elColor = null
    // this.renderer.setStyle(this.el.nativeElement, 'color', null)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
    // this.renderer.setStyle(this.el.nativeElement, 'border', null)
    // this.renderer.setStyle(this.el.nativeElement, 'padding', null)
  }
}
