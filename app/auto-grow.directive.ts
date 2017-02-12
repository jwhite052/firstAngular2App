import {Directive, ElementRef, Renderer} from 'angular2/core'

// apply directive decorator meta data
@Directive ({
    selector: '[autoGrow]', // square brackets refere to CSS attribute selector
    host: { // subscribe to events raised by this element 
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }

    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}