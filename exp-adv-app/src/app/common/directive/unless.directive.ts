import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myUnless]'
})
export class UnlessDirective {

  constructor(private _templateRef: TemplateRef<any>,  
              private _viewContainer: ViewContainerRef ) { }

 @Input() set myUnless(condition: boolean) {  
                if (!condition) {  this._viewContainer.createEmbeddedView(this._templateRef);    } 
                           else {  this._viewContainer.clear();    }  
            }           
}
