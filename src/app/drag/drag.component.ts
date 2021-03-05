import { Component, ElementRef, ViewChild, DoCheck } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-drag',
  templateUrl: 'drag.component.html',
  styleUrls: ['drag.component.css'],
})
export class DragComponent {
  // writeValue(value: any): void {
  //   this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  // }

  // constructor(private DragDropModule) {}

  todo = ['Go home', 'Fall asleep'];
  // todo2 = [this.qqq2, this.qqq];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  // dd = DragDrop.createDrag();

  // done2 = [this.qqq3];

  drop(event: CdkDragDrop<any[]>): void {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
