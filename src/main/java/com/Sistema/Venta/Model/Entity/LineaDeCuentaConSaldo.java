package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LineaDeCuentaConSaldo extends LineaDeCuenta {

    private Long id;
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
