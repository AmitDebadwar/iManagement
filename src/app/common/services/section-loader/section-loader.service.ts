import { Injectable } from '@angular/core';
import { SectionLoaderComponent } from './section-loader.component';





@Injectable({
  providedIn: 'root'
})
export class SectionLoaderService {
  private loaders = new Set<SectionLoaderComponent>();

  constructor() { }

  _register(loader: SectionLoaderComponent, isChildPage: boolean) {
    this.loaders.add(loader);
    if (isChildPage) {
      this.show(loader.name);
    }
  }

  _deRegister(sectionLoaderComponent: SectionLoaderComponent) {
    this.loaders.forEach(loader => {
      if (loader === sectionLoaderComponent) {
        this.loaders.delete(loader);
      }
    });
  }

  show(loaderName: string): void {

    this.loaders.forEach(

      loader => {

        if (loader.name === loaderName) {
          loader.showSectionLoader = true;
        }
      })
  }

  hide(loaderName: string) {
    this.loaders.forEach(
      loader => {
        if (loader.name === loaderName) {
          loader.showSectionLoader = false;
        }
      })
  }

  isLoading(loaderName: string): boolean | undefined {
    let showing = undefined;
    this.loaders.forEach(loader => {
      if (loader.name === loaderName) {
        showing = loader.showSectionLoader;
      }
    });
    return !showing;
  }

}
