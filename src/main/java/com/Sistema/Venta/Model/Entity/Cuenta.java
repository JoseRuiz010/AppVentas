package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

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

    private Cliente cliente;

    private List<LineaDeCuenta>lineaDeCuentas= new ArrayList<>();


    public Cuenta() {
        iniciar();
        cargarDescripcion();
    }

    public void cargarDescripcion(){
        this.descripcion= LocalDate.now().getMonth().toString()+ "/"+ LocalDate.now().getYear();
    }
    public void iniciar(){
        this.fechaInicio= LocalDate.now();
    }
    public void  finalizar(){
        this.fechaFin= LocalDate.now();
    }

    @Override
    public String toString() {
        return "Cuenta{" +
                "id=" + id +
                ", descripcion='" + descripcion + '\'' +
                ", fechaInicio=" + fechaInicio +
                ", fechaFin=" + fechaFin +
                ", cliente=" + cliente +
                ", Linea de Cuentas ="+lineaDeCuentas+
                '}';
    }
}
