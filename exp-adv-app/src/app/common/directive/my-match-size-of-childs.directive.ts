import { Directive , ElementRef, AfterViewChecked,   Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myMatchSizeOfChilds]'
})
export class MyMatchSizeOfChildsDirective implements AfterViewChecked {

    // css class name of childs to match size :
    @Input()
    myMatchSizeOfChilds: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        // call our matchSizeOfChildren function here later
        this.matchSizeOfChildren(this.el.nativeElement, this.myMatchSizeOfChilds);
    }

    @HostListener('window:resize') 
    onResize() {
        // call our matchSizeOfChildren function here later
        //console.log("window:resize")
        this.matchSizeOfChildren(this.el.nativeElement, this.myMatchSizeOfChilds);
    }

    matchSizeOfChildren(parent: HTMLElement, className: string) {
        // matchSizeOfChildren logic here

        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children) return;

        let parentHeight : number = parent.getBoundingClientRect().height;
        let parentWidth : number = parent.getBoundingClientRect().width; 
      
        //console.log("in MyMatchSizeOfChildsDirective directive: parentHeight="+ parentHeight + " and parentWidth=" + parentWidth );
       /*
        // apply same size as parent if not null
        if(parentHeight && parentWidth &&parentHeight > 0 && parentWidth > 0  )
           Array.from(children)
            .forEach((elt: HTMLElement) => { elt.style.height = `${parentHeight}px`;  elt.style.width = `${parentWidth}px` } );
       */
       // apply same width as parent if not null
       if(parentWidth  && parentWidth > 0  )
       Array.from(children)
        .forEach((elt: HTMLElement) => { 
             let eltWidth  =  0.98 * parentWidth ;
             elt.style.width = `${eltWidth}px`   
            } );
    }
}