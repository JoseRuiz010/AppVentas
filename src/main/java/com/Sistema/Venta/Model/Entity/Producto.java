package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Enum.TipoLineaProducto;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Producto {
    private Long id;
    private String descripcion;
    private String capacidad;
    private Double precio;
    private TipoLineaProducto lineaProducto;

    public Producto(String descripcion, String capacidad, Double precio, TipoLineaProducto lineaProducto) {
        this.descripcion = descripcion;
        this.capacidad = capacidad;
        this.precio = precio;
        this.lineaProducto = lineaProducto;
    }
}
