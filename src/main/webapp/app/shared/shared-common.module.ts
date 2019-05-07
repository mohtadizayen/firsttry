import { NgModule } from '@angular/core';

import { FirsttrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FirsttrySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FirsttrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirsttrySharedCommonModule {}
