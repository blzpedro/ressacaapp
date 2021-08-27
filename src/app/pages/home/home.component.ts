import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private socket: SocketService) { }
  messages: [] = [];

  sendMessage(value: string): void {
    this.socket.sendMessage(value);
  }

  ngOnInit() {
    this.socket.connectRoom()
    this.socket.getMessages().subscribe(message => {
      console.log(`Message received: ${message}`);
      this.messages.push(message);
    });
  }
}
