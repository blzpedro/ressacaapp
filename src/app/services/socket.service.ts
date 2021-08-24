import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable, Observer } from "rxjs";

@Injectable()
export class SocketService {
  constructor(private socket: Socket) { }

  connectRoom() {
    this.socket.emit('join room', 'Pedrão', 'Sala 1');
  }

  getMessages() {
    let observable$ = new Observable((observer) => {
      this.socket.on('chat message', (message) => {
        observer.next(message);
      });
    });
    return observable$
  }

  disconnectRoom() {
    this.socket.disconnect()
  }
}