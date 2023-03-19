package com.Sistema.Venta.Model.Entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.Sistema.Venta.Model.Entity.Enum.TipoLineaProducto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
@Table(name = "producto")
public class Producto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descripcion;
    private String capacidad;
    private Double precio;
    @Enumerated(EnumType.STRING)
    private TipoLineaProducto lineaProducto;

    public Producto(String descripcion, String capacidad, Double precio, TipoLineaProducto lineaProducto) {
        this.descripcion = descripcion;
        this.capacidad = capacidad;
        this.precio = precio;
        this.lineaProducto = lineaProducto;
    }
}
