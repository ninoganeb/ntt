import { Routes } from '@angular/router';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsComponent } from './components/terms/terms.component';

export const routes: Routes = [
    {path: 'privacy', component: PrivacyComponent},
    { path: 'disclaimer', component: DisclaimerComponent},
    {path: 'terms', component: TermsComponent}
];
