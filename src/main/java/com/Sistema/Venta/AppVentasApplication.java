package com.Sistema.Venta;

import com.Sistema.Venta.Model.Entity.*;
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
		log.info("Hola mundooooo");

		Cliente c= new Cliente();
		c.setNombre("Mariela");
		c.setApellido("Mariela");
		c.setEmail("Mariela@gmil.com");
		c.setTelefono("3814463721");
		c.setDireccion("Leales, Barrio Pedro Parra MZ B Casa 17");
		log.info(c.toString());

		Cuenta cu= new Cuenta();
		cu.setCliente(c);

		Saldo s= new Saldo();
		s.setMonto(500.00);
		s.setDescripcion("Plata a don Rudy");

		Producto p = new Producto();
		p.setPrecio(450D);
		p.setCapacidad("2 1/4L");
		p.setDescripcion("Pepsi 2 1/4");

		LineaDeCuentaConProducto lcp= new LineaDeCuentaConProducto();

			lcp.setProducto(p);
			lcp.setCantidad(2);
			lcp.calcularsubtotal();
		LineaDeCuenta lc= new LineaDeCuenta();
		lc.setLineaDeCuenta(lcp);
		LineaDeCuenta lc1= new LineaDeCuenta();
		lc1.setLineaDeCuenta(s);

		cu.getLineaDeCuentas().add(lc);
		cu.getLineaDeCuentas().add(lc1);

		log.info(cu.toString());

	}
}
