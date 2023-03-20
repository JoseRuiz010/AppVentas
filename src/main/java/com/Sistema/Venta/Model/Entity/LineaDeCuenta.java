package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
 

@Setter
@Getter
@Entity(name = "lineaDeCuenta")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class LineaDeCuenta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate fecha;
   // private Vendedor vendedor;
    private Double Subtotal;
    
    

    public  void CalcularSubTotal() {}



	public LineaDeCuenta() {
		super();
		this.fecha = LocalDate.now();
		Subtotal = 0.0;
	};
}
