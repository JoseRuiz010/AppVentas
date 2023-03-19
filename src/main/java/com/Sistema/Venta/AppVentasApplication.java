package com.Sistema.Venta;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Sistema.Venta.Model.Entity.Cliente;
import com.Sistema.Venta.Model.Entity.Cuenta;
import com.Sistema.Venta.Model.Entity.Usuario;
import com.Sistema.Venta.Services.ServiceClienteImpl;

@SpringBootApplication
public class AppVentasApplication implements CommandLineRunner {
	@Autowired
	ServiceClienteImpl serviceCliente;

	Logger log= LoggerFactory.getLogger(AppVentasApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AppVentasApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Usuario u = new Usuario("roque", "1234");
		Cliente c= new Cliente("Roque","Argañaraz","Roque@gmail.com","3814463721", "Leales, Barrio Pedro Parra MZ B Casa 17","CodRoque");
		c.setUsuario(u);
		serviceCliente.addCliente(c);
		
		Cuenta cu= new Cuenta();
		c.getCuentas().add(cu);
	    var cc=	c.getCuentas();
		
		serviceCliente.agregarCuenta(cu,1L);
		
		
		log.info("Mostrar cliente 1 "+serviceCliente.getById(1L).getApellido());
		
	/*	Producto p= new Producto("Pepsi", "3L", 450D, TipoLineaProducto.PEPSI);
		Producto p1= new Producto("Coca", "3L", 650D, TipoLineaProducto.COCA_COLA);

		Vendedor v= new Vendedor("Carlos","Ruiz","carlos@gmail.com","3816397808","Leales Tucuman","44588");
		
		c.agregarCuenta(cu);
		LineaDeCuenta l1= new LineaDeCuentaConProducto(1,p);
		l1.setVendedor(v);
		LineaDeCuenta l2= new LineaDeCuentaConProducto(1,p1);
		l2.setVendedor(v);
		LineaDeCuenta l3= new LineaDeCuentaConSaldo(500D, "Plata a Facundo");
		l3.setVendedor(v);
		cu.AgregarLineaDeCuenta(l1);
		cu.AgregarLineaDeCuenta(l2);
		cu.AgregarLineaDeCuenta(l3);

		cu.CalcularTotal();
		log.info(cu.toString());*/

	}
}
