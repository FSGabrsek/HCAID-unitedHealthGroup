import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './features/page-home/page-home.component';
import { PageDisclaimerComponent } from './features/page-disclaimer/page-disclaimer.component';
import { FormsModule } from '@angular/forms';
import { PageFormComponent } from './features/page-form/page-form.component';
import { SectionPersonalComponent } from './features/page-form/sections/section-personal/section-personal.component';
import { SectionInfoComponent } from './features/page-form/sections/section-info/section-info.component';
import { SectionTestsComponent } from './features/page-form/sections/section-tests/section-tests.component';
import { SectionExtraComponent } from './features/page-form/sections/section-extra/section-extra.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PageOnboardingComponent } from './features/page-onboarding/page-onboarding.component';
import { SectionAidComponent } from './features/page-form/sections/section-aid/section-aid.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageDisclaimerComponent,
    PageFormComponent,
    SectionPersonalComponent,
    SectionInfoComponent,
    SectionTestsComponent,
    SectionExtraComponent,
    HeaderComponent,
    PageOnboardingComponent,
    SectionAidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
