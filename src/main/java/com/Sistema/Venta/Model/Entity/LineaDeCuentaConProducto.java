package com.Sistema.Venta.Model.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "lineaDeCuentaConProducto")
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
