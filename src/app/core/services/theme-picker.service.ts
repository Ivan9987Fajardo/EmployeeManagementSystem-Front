import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {

  insertedElement!: HTMLElement;

  /**
   * Load the theme
   * 
   * @param {string} themeName Name of the theme, Check file name on assets/themes 
   */
  loadTheme(themeName: string):void {
    void import(`../../../assets/themes/${themeName}.scss`)
    .then((s: {default:string}) => s.default)
    .then(this.insertToDom);
  }

  insertToDom = (content: string):void => {
    const element = document.createElement('style');
    element.textContent = content;
    document.head.appendChild(element);
    if (this.insertedElement) this.insertedElement.remove();
    this.insertedElement = element;
  };
}
