import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
//import { TokenInterceptor } from './interceptors/token.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//import { HomeComponent } from './pages/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home/home.component';
import { DocSidebarComponent } from './pages/doctor/doc-sidebar/doc-sidebar/doc-sidebar.component';
import { ViewDrugsComponent } from './pages/drugs/view-drugs/view-drugs.component';
import { AddDrugsComponent } from './pages/drugs/add-drugs/add-drugs.component';
import { EditDrugsComponent } from './pages/drugs/edit-drugs/edit-drugs.component';
import { DeleteDrugsComponent } from './pages/drugs/delete-drugs/delete-drugs.component';
import { ViewSuppliersComponent } from './pages/suppliers/view-suppliers/view-suppliers.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { PickedUpOrdersComponent } from './pages/orders/picked-up-orders/picked-up-orders.component';
import { AddSuppliersComponent } from './pages/suppliers/add-suppliers/add-suppliers.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EditSuppliersComponent } from './pages/suppliers/edit-suppliers/edit-suppliers.component';
import { PlaceOrderComponent } from './pages/orders/place-order/place-order.component';
import { WaitComponent } from './pages/orders/wait/wait.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ViewReportsComponent } from './pages/sales/view-reports/view-reports.component';
import { TodayReportComponent } from './pages/sales/today-report/today-report.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { SupplierPickupComponent } from './pages/suppliers/supplier-pickup/supplier-pickup.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    WelcomeComponent,
    NavbarComponent,
    AdminDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    //HomeComponent,
    DoctorDashboardComponent,
    HomeComponent,
    DocSidebarComponent,
    ViewDrugsComponent,
    AddDrugsComponent,
    EditDrugsComponent,
    DeleteDrugsComponent,
    ViewSuppliersComponent,
    OrdersComponent,
    PickedUpOrdersComponent,
    AddSuppliersComponent,
    EditSuppliersComponent,
    PlaceOrderComponent,
    WaitComponent,
    PaymentComponent,
    MyOrdersComponent,
    ViewReportsComponent,
    TodayReportComponent,
    ImageUploadComponent,
    SupplierPickupComponent,
    EditUserComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [/*{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }*/
    DatePipe,
    MatSnackBarModule,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
