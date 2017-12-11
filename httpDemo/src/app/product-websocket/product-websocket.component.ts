import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../shared/web-socket.service';

@Component({
  selector: 'app-product-websocket',
  templateUrl: './product-websocket.component.html',
  styleUrls: ['./product-websocket.component.css']
})
export class ProductWebsocketComponent implements OnInit {

  constructor(private ws: WebSocketService) { }

  ngOnInit() {
    this.ws.createObservableSocket('ws://localhost:8085').subscribe(
      data => {console.log(data)}
      );
  }

  sendMessage() {
    this.ws.sendMessage('asdasdasd');
  }

}
