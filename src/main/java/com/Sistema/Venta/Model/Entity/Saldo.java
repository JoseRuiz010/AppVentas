package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Contratos.AbstractLineaDeCuenta;

public class Saldo extends AbstractLineaDeCuenta {


    @Override
    public void calcularsubtotal() {
        getMonto();
    }


}
