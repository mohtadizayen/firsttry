import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirsttrySharedLibsModule, FirsttrySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FirsttrySharedLibsModule, FirsttrySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirsttrySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirsttrySharedModule {
  static forRoot() {
    return {
      ngModule: FirsttrySharedModule
    };
  }
}
