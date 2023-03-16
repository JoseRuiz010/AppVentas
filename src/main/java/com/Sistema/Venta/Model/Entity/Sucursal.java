package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Sucursal {
    private Long id;
    private String nombre;
    private String telefono;
    private String direccion;
}
