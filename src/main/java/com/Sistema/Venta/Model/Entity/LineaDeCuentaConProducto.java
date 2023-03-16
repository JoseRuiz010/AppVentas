package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Contratos.AbstractLineaDeCuenta;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LineaDeCuentaConProducto extends AbstractLineaDeCuenta {

    private int cantidad;
    private Producto producto;
    public LineaDeCuentaConProducto() {

    }

    private void CargarDescripcion(){
        setDescripcion(producto.getDescripcion()+" "+producto.getCapacidad());
    }

    @Override
    public void calcularsubtotal() {
        setMonto(producto.getPrecio()* this.cantidad);
    }

    @Override
    public String toString() {
        return "LineaDeCuentaConProducto{" +
                "cantidad=" + cantidad +
                ", producto=" + producto +
                '}';
    }
}
