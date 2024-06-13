// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-open_file1Component
import { open_file1Component } from '../components/open_file1.component';
//CORE_REFERENCE_IMPORT-open_fileComponent
import { open_fileComponent } from '../components/open_file.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loader.component';
//CORE_REFERENCE_IMPORT-auth
import { auth } from '../canActivate/auth.canActivate';
//CORE_REFERENCE_IMPORT-shared
import { shared } from '../sd-services/shared';
//CORE_REFERENCE_IMPORT-newPasswordComponent
import { newPasswordComponent } from '../components/newPassword.component';
//CORE_REFERENCE_IMPORT-verificationComponent
import { verificationComponent } from '../components/verification.component';
//CORE_REFERENCE_IMPORT-forgotPasswowrdComponent
import { forgotPasswowrdComponent } from '../components/forgotPasswowrd.component';
//CORE_REFERENCE_IMPORT-selectedLoanComponent
import { selectedLoanComponent } from '../components/selectedLoan.component';
//CORE_REFERENCE_IMPORT-selectedAccountComponent
import { selectedAccountComponent } from '../components/selectedAccount.component';
//CORE_REFERENCE_IMPORT-SupportComponent
import { SupportComponent } from '../components/Support.component';
//CORE_REFERENCE_IMPORT-SettingsComponent
import { SettingsComponent } from '../components/Settings.component';
//CORE_REFERENCE_IMPORT-ReportsComponent
import { ReportsComponent } from '../components/Reports.component';
//CORE_REFERENCE_IMPORT-loanManagementComponent
import { loanManagementComponent } from '../components/loanManagement.component';
//CORE_REFERENCE_IMPORT-accountManagementComponent
import { accountManagementComponent } from '../components/accountManagement.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landing.component';
//CORE_REFERENCE_IMPORT-toolbarComponent
import { toolbarComponent } from '../components/toolbar.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-signInComponent
import { signInComponent } from '../components/signIn.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-open_file1Component
  open_file1Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-open_fileComponent
  open_fileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
  loaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-newPasswordComponent
  newPasswordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verificationComponent
  verificationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgotPasswowrdComponent
  forgotPasswowrdComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectedLoanComponent
  selectedLoanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectedAccountComponent
  selectedAccountComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SupportComponent
  SupportComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SettingsComponent
  SettingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ReportsComponent
  ReportsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loanManagementComponent
  loanManagementComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-accountManagementComponent
  accountManagementComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbarComponent
  toolbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-signInComponent
  signInComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-shared
  shared,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'sign-in', component: signInComponent },
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'landing', component: landingComponent },
      { path: 'Account Management', component: accountManagementComponent },
      { path: 'Loan management', component: loanManagementComponent },
      { path: 'Reports', component: ReportsComponent },
      { path: 'Settings', component: SettingsComponent },
      { path: 'Support', component: SupportComponent },
      { path: 'Selected Account', component: selectedAccountComponent },
      { path: 'Selected Loan', component: selectedLoanComponent },
    ],
  },
  { path: 'Forgot  Password', component: forgotPasswowrdComponent },
  { path: 'verification', component: verificationComponent },
  { path: 'new Password', component: newPasswordComponent },
  { path: 'file', component: open_fileComponent },
  { path: 'open_proof', component: open_file1Component },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
