import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('dp_datos_generales')
export class datosPersonales {

    @PrimaryGeneratedColumn()
    id_dp_datos_generales: number;
    
    @Column()
    documento: string;

    @Column()
    nombre_completo: string;

    @Column()
    primer_nombre: string;

    @Column()
    segundo_nombre: string;

    @Column()
    primer_apellido: string;

    @Column()
    segundo_apellido: string;

    @Column()
    nacionalidad: string;

    @Column()
    idioma_nativo: string;

    @Column()
    genero: string;

    @Column()
    estado_civil: string;

    @Column({ type: "datetime" })
    fecha_nacimiento: string;

    @Column()
    area_personal: string;

    @Column()
    area_nomina: string;

    @Column()
    subdivision_personal: string;

    @Column({ type: "datetime" })
    fecha_alta: string;

    @Column()
    cc_nomina: number;

    @Column()
    entidad_seguridad_social: string;

    @Column()
    id_dp_tipo_documento: number;

}