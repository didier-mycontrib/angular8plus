import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  @Input('myHighlight') 
 public  highlightColor: string; 
 
 private _defaultColor = 'red';

 @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') 
    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }  

   @HostListener('mouseleave') 
   onMouseLeave() { this._highlight(null); }  

    private _highlight(color: string) {   
      this.backgroundColor =  color;  
     }


}

/*
V1 sans @HostBinding :

HighlightDirective {

  @Input('myHighlight') 
 public  highlightColor: string; 
 
 private _defaultColor = 'red';


  constructor(private el: ElementRef) {  
  } 

    @HostListener('mouseenter') 
    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }  

   @HostListener('mouseleave') 
   onMouseLeave() { this._highlight(null); }  

    private _highlight(color: string) {   
      this.el.nativeElement.style.backgroundColor =  color;  
     }


}

*/
