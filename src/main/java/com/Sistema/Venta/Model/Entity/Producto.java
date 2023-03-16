package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Producto {
    private Long id;
    private String descripcion;
    private String capacidad;
    private Double precio;
}
