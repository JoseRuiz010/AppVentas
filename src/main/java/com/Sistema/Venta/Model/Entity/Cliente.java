package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
 


@Getter
@Setter
 
@Entity
public class Cliente  extends  Persona implements Serializable {
	 
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String codigoCliente;
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private Usuario usuario;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "cuenta_id")
	private List<Cuenta>cuentas=  new ArrayList<>();
	
	
	public Cliente(String nombre, String apellido, String email, String telefono, String direccion,
			String codigoCliente) {
		super(nombre, apellido, email, telefono, direccion);
		 
		this.codigoCliente = codigoCliente;
	}
	
	public Cliente(String nombre, String apellido, String email, String telefono, String direccion, 
			String codigoCliente, Usuario usuario) {
		super(nombre, apellido, email, telefono, direccion);
		this.codigoCliente = codigoCliente;
		this.usuario = usuario;
		setCuentas(new ArrayList<Cuenta>());
		 
	}

	public Cliente() {
		setCuentas(new ArrayList<Cuenta>());
	}
    

    /*public void agregarCuenta(Cuenta c){
        cuentas.add(c);
    } */

  
}
