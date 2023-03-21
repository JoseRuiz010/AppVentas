package com.Sistema.Venta.Model.Entity;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Vendedor extends Persona {

    private Long id;
    private String legajo;
   // private Usuario usuario;

    public Vendedor(String nombre, String apellido, String email, String telefono, String direccion, String legajo) {
        super(nombre, apellido, email, telefono, direccion);
        this.legajo = legajo;
    }
}
