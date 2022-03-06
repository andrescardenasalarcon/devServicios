CREATE TABLE materiapensum(
    cod_pensum int4 not null,
    cod_materia int4 not null,
    cod_semestre int4 not null,
    constraint pk_materiapensum primary key (cod_pensum,cod_materia)
);
Alter table materiapensum owner to user_node;

CREATE TABLE materias(
    cod_materia serial,
    nombre_materia varchar(200) not null,
    referenacia_materia varchar(200)not null,
    constraint pk_materias primary key (cod_materia)
);
Alter table materias owner to user_node;

CREATE TABLE pensums(
    cod_pensum serial,
    cod_programa int4 not null,
    nombre_pensum varchar(250) not null,
    constraint pk_pensum primary key (cod_pensum)
);
Alter table pk_pensum owner to user_node;

CREATE TABLE semestres(
    cod_semestre serial,
    nombre_semestre varchar(200)NOT null,
    constraint pk_semestres primary key (cod_semestre)
);
Alter table pk_semestres owner to user_node;

CREATE TABLE programas(
    cod_programa serial,
    nombre_programa varchar(200) not null,
    constraint pk_programas primary key(cod_programa)
);
Alter table pk_programas owner to user_node;

CREATE UNIQUE INDEX indice_nompro ON programas (nombre_programa);

Alter table materiapensum
    add constraint fk_materiapen_ref_materias foreign key (cod_materia)
    references materias(cod_materia)
    on delete restrict on update cascade;

Alter table materiapensum 
    add constraint fk_materiapen_ref_semestres foreign key(cod_semestre) 
    references semestres(cod_semestre)
    on delete restrict on update cascade;

Alter table materiapensum
    add constraint fk_materiapen_ref_pensums foreign key(cod_pensum)
    references pensums (cod_pensum)
    on delete restrict on update cascade;

Alter table pensums 
    add constraint fk_materiapen_ref_programas foreign key(cod_programa)
    references programas(cod_programa)
    on delete restrict on update cascade;





