package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Contratos.AbstractLineaDeCuenta;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class LineaDeCuenta {
    private Long id;
    private LocalDate fecha;
    private AbstractLineaDeCuenta lineaDeCuenta;

    @Override
    public String toString() {
        return "LineaDeCuenta{" +
                "id=" + id +
                ", fecha=" + fecha +
                ", lineaDeCuenta=" + lineaDeCuenta +
                '}';
    }
}
