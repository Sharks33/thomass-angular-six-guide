import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayDataBindingComponent } from './two_way_data_binding/two_way_data_binding.component';
import { SettingUpBootstrapComponent } from './setting_up_bootstrap/setting-up-bootstrap.component';
import { CreatingComponentsComponent } from './creating_components/creating-components.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayDataBindingComponent,
    SettingUpBootstrapComponent,
    CreatingComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
