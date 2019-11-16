import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";  
import { datosPersonales } from "./datosGenerales.entity";

@Entity('dp_distribucion_personal')
export class Personal {

    @PrimaryGeneratedColumn()
    id_dp_distribucion_personal: number;

    @Column()
    documento: string;

    @Column()
    codigo_sap: number;

    @Column({ type: "date" })
    fecha_actual: string;
    
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
    fecha_modificacion: string;

    @Column({ type: "datetime" })
    fecha_conex_ultimo_pcrc: string;

    @Column()
    id_dp_plazas: number;

    @OneToOne(type => datosPersonales)
    @JoinColumn({ referencedColumnName:'id_dp_datos_generales', name:'id_dp_datos_generales' })
    id_dp_datos_generales: number;

}