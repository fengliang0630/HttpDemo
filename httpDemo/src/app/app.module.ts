import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpModule} from '@angular/http';
import { ProductWebsocketComponent } from './product-websocket/product-websocket.component';
import {WebSocketService} from './shared/web-socket.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductWebsocketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
