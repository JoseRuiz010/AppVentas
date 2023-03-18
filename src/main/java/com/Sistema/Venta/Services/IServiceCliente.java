package com.Sistema.Venta.Services;

import java.util.List;

import com.Sistema.Venta.Model.Entity.Cliente;
import com.Sistema.Venta.Model.Entity.Cuenta;

public interface IServiceCliente {

	List<Cliente> getAll ();
	Cliente getById(Long id);
	Cliente addCliente(Cliente cliente);
	Cliente update (Long id,Cliente cliente);
	Cliente removeById (Long id);
	Cliente agregarCuenta (Cuenta cuenta, Long id);
}
