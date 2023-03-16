package com.Sistema.Venta.Model.Entity;

import com.Sistema.Venta.Model.Entity.Enum.EstadoCuenta;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Cuenta {
    private Long id;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    private EstadoCuenta estado;

    private List<LineaDeCuenta> lineasDeCuenta = new ArrayList<>();

    private Double total=0.0;

    public Cuenta() {
        iniciar();
        estado= EstadoCuenta.ACTIVA;
    }

    private void iniciar(){
        this.descripcion= LocalDate.now().getMonth().toString()+ "/"+ LocalDate.now().getYear();
        setFechaInicio(LocalDate.now());
    }

    public void FinalizarCuenta(){
        setEstado(EstadoCuenta.PAGADO);
        setFechaFin(LocalDate.now());
    }


    public void AgregarLineaDeCuenta(LineaDeCuenta lineaDeCuenta){
        this.lineasDeCuenta.add(lineaDeCuenta);
    }
    public void AgregarLineasDeCuenta(List<LineaDeCuenta> lineaDeCuentas){
         lineaDeCuentas.forEach(lc->this.lineasDeCuenta.add(lc));
    }

    public void CalcularTotal(){
        lineasDeCuenta.forEach(lc-> {
            lc.CalcularSubTotal();
            setTotal(getTotal()+lc.getSubtotal());
        });
    }

    @Override
    public String toString() {
        return "Cuenta{" +
                "id=" + id +
                ", descripcion='" + descripcion + '\'' +
                ", fechaInicio=" + fechaInicio +
                ", fechaFin=" + fechaFin +
                ", estado=" + estado +
                ", lineasDeCuenta=" + lineasDeCuenta +
                ", total=" + total +
                '}';
    }
}
