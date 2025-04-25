import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false); // signal to track if the todo is completed
  el = inject(ElementRef); // inject the element reference
  stylesEffect = effect(() => {
    if(this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen'; // highlight completed todos
      this.el.nativeElement.style.color = '#6c757d'; // change text color to black
      this.el.nativeElement.style.textDecoration = 'line-through'; // strike through text
    } else {
      this.el.nativeElement.style.backgroundColor = 'white'; // reset background color
      this.el.nativeElement.style.color = 'black'; // reset text color
      this.el.nativeElement.style.textDecoration = 'none'; // remove strike through text
    }
  })
}
