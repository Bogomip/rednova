import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token';
import { GameComponent } from './game/game.component';
import { EntryComponent } from './entry/entry.component';
import { GalaxyListComponent } from './entry/galaxy-list/galaxy-list.component';
import { PlanetComponent } from './planet/planet.component';
import { ShipoverviewComponent } from './shipoverview/shipoverview.component';
import { ConsoleComponent } from './console/console.component';
import { TradeRoutesComponent } from './trade/trade-routes/trade-routes.component';
import { MenuComponent } from './menu/menu.component';
import { MoveComponent } from './move/move.component';
import { SystemComponent } from './system/system.component';
import { TradeRouteLauncherComponent } from './trade/trade-route-launcher/trade-route-launcher.component';
import { DisplayTradeLogComponent } from './trade/display-trade-log/display-trade-log.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingComponent } from './utilities/loading/loading.component';
import { LogoComponent } from './utilities/logo/logo.component';
import { RegisterComponent } from './register/register.component';
import { NormalComponent } from './register/normal/normal.component';
import { AnonComponent } from './register/anon/anon.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticateComponent,
    AdminComponent,
    GameComponent,
    EntryComponent,
    GalaxyListComponent,
    PlanetComponent,
    ShipoverviewComponent,
    ConsoleComponent,
    TradeRoutesComponent,
    MenuComponent,
    MoveComponent,
    SystemComponent,
    TradeRouteLauncherComponent,
    DisplayTradeLogComponent,
    NavigationComponent,
    LoadingComponent,
    LogoComponent,
    RegisterComponent,
    NormalComponent,
    AnonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
