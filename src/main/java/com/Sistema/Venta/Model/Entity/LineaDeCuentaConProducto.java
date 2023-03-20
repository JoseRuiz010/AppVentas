package com.Sistema.Venta.Model.Entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "lineaDeCuentaConProducto")
@NoArgsConstructor
public class LineaDeCuentaConProducto extends LineaDeCuenta {
	
    private int cantidad;
    @OneToOne
    private Producto producto;

    public LineaDeCuentaConProducto(int cantidad, Producto producto) {
        this.cantidad = cantidad;
        this.producto = producto;
    }

   /* @Override
    public void CalcularSubTotal() {
        setSubtotal(this.cantidad*this.producto.getPrecio());
    }*/

    @Override
    public String toString() {
        return "LineaDeCuentaConProducto{" +
                "cantidad=" + cantidad +
                ", producto=" + producto +
                '}';
    }

	 
}
