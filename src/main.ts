import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/layouts/home/home.component';
import { ShopComponent } from './app/layouts/shop/shop.component';
import { ProductDetailsComponent } from './app/components/product-details/product-details.component';
import { AdminComponent } from './app/layouts/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'details/:index', component: ProductDetailsComponent },
  { path: 'admin', component: AdminComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
}).catch((err) => console.error(err));

if (environment.production) {
  enableProdMode();
}
