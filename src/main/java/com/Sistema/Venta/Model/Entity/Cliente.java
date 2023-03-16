package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Cliente  extends  Persona{
    private Long id;
    private Usuario usuario;
    private List<Cuenta>cuentas;

    public Cliente(String nombre, String apellido, String email, String telefono, String direccion, Usuario usuario) {
        super(nombre, apellido, email, telefono, direccion);
        this.usuario = usuario;
        this.cuentas = new ArrayList<>();
    }

    public void agregarCuenta(Cuenta c){
        cuentas.add(c);
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "id=" + id +
                ", cuentas=" + cuentas +
                '}';
    }
}
