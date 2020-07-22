import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const AD = require('activedirectory2').promiseWrapper;
import {  UserIndex } from "../indices/userIndex";

const config= { url: 'ldap://172.20.1.220',
            baseDN: 'dc=multienlace,dc=com,dc=co',
            username: 'julian.vargas.a@multienlace.com.co',
            password: 'Android2036+' ,
            attributes: {
                "user": [
                    'postOfficeBox', 'userPrincipalName', 'cn' 
                ]
              }
        }
            
             

@Injectable()
export class auth2 {

    

    constructor(private readonly _jwtService:JwtService,private UserIndex:UserIndex)
        {
        }

       

        async CallUser(username,password){

            var ad = new AD(config);
            var usernameF = `${username}@multienlace.com.co`;

                try{

                    var addd = new AD(config);
                    let promesa3= await addd.findUser(usernameF);

                    if(promesa3){

                        let promesa=await ad.authenticate(usernameF, password);
                
                        if(promesa){
                           
                            var add = new AD(config);
                            let user= await add.findUser(usernameF);

                            var userfind = await this.UserIndex.where( { cedula: user.postOfficeBox })

                            return {
                                "id": user.postOfficeBox,
                                "email": user.userPrincipalName,
                                "username": user.cn,
                                "roles": userfind[0].rol,
                                "code":"200"
                            };
        
                        }

                    }else{

                        return {
                            "message":"Usuario No Existe",
                            "code":"401"
                        }

                    }

                }catch(err){

                    var substring = "data 52e";
                    if(err.lde_message.indexOf(substring) !== -1){
                        return {
                            "message":"Contraseña Incorrecta",
                            "code":"401"
                        }
                    }

                    var substring2="data 775";
                    if(err.lde_message.indexOf(substring2) !== -1){
                        return {
                            "message":"Usuario Bloqueado",
                            "code":"401"
                        }
                    }

                    //console.log(err.lde_message)

                    
                }
      

    }


}
