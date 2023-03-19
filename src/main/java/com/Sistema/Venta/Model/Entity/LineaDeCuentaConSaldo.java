package com.Sistema.Venta.Model.Entity;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity(name = "lineaDeCuentaConSaldo")
public class LineaDeCuentaConSaldo extends LineaDeCuenta {
 
    private Double monto;
    private String descripcion;

    public LineaDeCuentaConSaldo(Double monto, String descripcion) {
        this.monto = monto;
        this.descripcion = descripcion;
    }

    public LineaDeCuentaConSaldo(Double monto) {
        this.monto = monto;
    }

    @Override
    public void CalcularSubTotal() {
        setSubtotal(this.monto);
    }

    @Override
    public String toString() {
        return "LineaDeCuentaConSaldo{" +
                "monto=" + monto +
                ", descripcion='" + descripcion + '\'' +
                '}';
    }
}
