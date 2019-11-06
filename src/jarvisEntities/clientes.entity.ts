import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Pcrc } from "./pcrc.entity";

@Entity('dp_clientes')
export class Clientes {

    @PrimaryGeneratedColumn()
    id_dp_clientes: number;
    
    @Column()
    cliente: string;
    
    @Column()
    tipo_industria: string;
    
    @Column()
    estado: number;
    
    @OneToMany(type => Pcrc, pcrc => pcrc.id_dp_clientes)
    @JoinColumn({referencedColumnName:'id_dp_clientes'})
    pcrcs:Pcrc[]

}