import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pcrc } from "./pcrc.entity";

@Entity('dp_distribucion_personal')
export class Personal {

    @PrimaryGeneratedColumn()
    id_dp_distribucion_personal: number;

    @Column()
    documento: string;

    @Column()
    codigo_sap: number;

    @Column({ type: "date" })
    fecha_actual: string; // date
    
    @Column()
    pcrc: string;

    @Column()
    ceco_op: number;

    @Column()
    ceco_area: number;

    @Column()
    documento_jefe: string;

    @Column()
    documento_responsable: string;

    @Column()
    tipo_distribucion: string;

    @Column()
    unidad_organizativa: string;
    
    @Column({ type: "datetime" })
    fecha_modificacion: string; // date time

    @Column({ type: "datetime" })
    fecha_conex_ultimo_pcrc: string; // date time

    @Column()
    id_dp_plazas: number;

    @Column()
    id_dp_datos_generales: number;

}