package com.Sistema.Venta.Model.Entity.Contratos;

public abstract   class  AbstractLineaDeCuenta {

    private String descripcion;
    private Double monto;

    public abstract void calcularsubtotal();

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    @Override
    public String toString() {
        return "AbstractLineaDeCuenta{" +
                "descripcion='" + descripcion + '\'' +
                ", monto=" + monto +
                '}';
    }
}
