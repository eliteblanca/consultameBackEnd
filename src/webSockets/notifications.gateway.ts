import { SubscribeMessage, WebSocketGateway, MessageBody, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from "socket.io";
import { PcrcModelService } from "../services/pcrc-model.service";

@WebSocketGateway({ namespace: 'articles' })
export class NotificationsGateway  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

  constructor(private pcrcModel:PcrcModelService){

  }

  afterInit(server: any) {
  }

  async handleConnection(socket: Socket, ...args: any[]) {
    console.log('cliente conectado')
    console.log(socket.handshake.query.cedula)    
  }


  handleDisconnect(client: any) {
    console.log('cliente desconectado')
  }


  @SubscribeMessage('newArticle')
  handleNewArticle(@MessageBody() data: string): any {
    return false;
  }

  @SubscribeMessage('subcribe')
  subcribeToRoom(
    @MessageBody() data: string,
    @ConnectedSocket() socket: Socket
  ): any {

    let rooms = Object.keys(socket.rooms)

    if(rooms.length > 1){
      socket.leave(rooms[0])
    }

    socket.join(data)

    return false;
  }

  @SubscribeMessage('newarticle')
  newArticle(
    @MessageBody() data: string,
    @ConnectedSocket() socket: Socket
  ): any {

    console.log('new article')
    console.log(data)

    let rooms = Object.keys(socket.rooms)

    if(rooms.length > 1){
      console.log('emit to ', rooms[0])
      socket.in(rooms[0]).emit('newarticle',data)
    }
  }
}