import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor() {}

  public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public showBackButton: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(true);

  public setTitle(title: string) {
    this.title.next(title);
    this.setDocumentTitle();
  }

  public getTitle() {
    return this.title.value;
  }

  public resetTitle() {
    this.title.next(null);
  }

  private setDocumentTitle() {
    if (this.getTitle() && this.getTitle().length > 0) {
      document.title = `${this.getTitle()} - Finance Manager`;
    } else {
      document.title = 'Finance Manager';
    }
  }
}
