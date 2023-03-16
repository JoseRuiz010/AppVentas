package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LineaDeCuentaConProducto extends LineaDeCuenta {
    private Long id;
    private int cantidad;
    private Producto producto;

    public LineaDeCuentaConProducto(int cantidad, Producto producto) {
        this.cantidad = cantidad;
        this.producto = producto;
    }

    @Override
    public void CalcularSubTotal() {
        setSubtotal(this.cantidad*this.producto.getPrecio());
    }

    @Override
    public String toString() {
        return "LineaDeCuentaConProducto{" +
                "cantidad=" + cantidad +
                ", producto=" + producto +
                '}';
    }
}
