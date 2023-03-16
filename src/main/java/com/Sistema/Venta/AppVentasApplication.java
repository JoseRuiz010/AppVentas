package com.Sistema.Venta;

import com.Sistema.Venta.Model.Entity.*;
import com.Sistema.Venta.Model.Entity.Enum.TipoLineaProducto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppVentasApplication implements CommandLineRunner {

	Logger log= LoggerFactory.getLogger(AppVentasApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AppVentasApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Producto p= new Producto("Pepsi", "3L", 450D, TipoLineaProducto.PEPSI);
		Producto p1= new Producto("Coca", "3L", 650D, TipoLineaProducto.COCA_COLA);

		Vendedor v= new Vendedor("Carlos","Ruiz","carlos@gmail.com","3816397808","Leales Tucuman","44588");
		Usuario u = new Usuario("roque", "1234");
		Cliente c= new Cliente("Roque","Argañaraz","Roque@gmail.com","3814463721", "Leales, Barrio Pedro Parra MZ B Casa 17",u);
		Cuenta cu= new Cuenta();
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
		log.info(cu.toString());

	}
}
