package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public abstract class LineaDeCuenta {
    private Long id;
    private LocalDate fecha;
    private Vendedor vendedor;
    private Double Subtotal;

    public abstract void CalcularSubTotal();
}
