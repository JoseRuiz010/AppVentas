package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Persona;

public class Vendedor extends Persona {

    private Long id;
    private String legajo;

    private Usuario usuario;

    public Vendedor(String nombre, String apellido, String email, String telefono, String direccion, String legajo) {
        super(nombre, apellido, email, telefono, direccion);
        this.legajo = legajo;
    }
}
