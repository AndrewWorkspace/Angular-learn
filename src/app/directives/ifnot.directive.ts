import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if(!condition){
      //Показать блок
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      // Скрыть Блок
      this.viewContainer.clear()
    }
  }

  constructor(
    private  templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef){

  }

}
