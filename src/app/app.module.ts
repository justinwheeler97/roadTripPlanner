import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Query, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-modialog';
import { RouterModule, Routes } from "@angular/router";
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatCheckboxModule, MatSelectModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatGridListModule, MatInputModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserTableComponent } from './tables/user-table/user-table.component';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ContextMenuModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './services/global-error-handler';
import { ServerErrorInterceptor } from './services/server-error.interceptor';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserTableComponent, data: { title: 'Users' } }
];

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    ModalModule.forRoot(),
    BootstrapModalModule,
    NguiAutoCompleteModule, BrowserAnimationsModule,
    MatTableModule, MatSelectModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatButtonModule,
    CommonModule, MatGridListModule, MatInputModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule, MatAutocompleteModule, ReactiveFormsModule, MatStepperModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    MenuModule,
    CardModule,
    ContextMenuModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
