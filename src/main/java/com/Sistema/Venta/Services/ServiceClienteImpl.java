package com.Sistema.Venta.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.Cliente;
import com.Sistema.Venta.Model.Entity.Cuenta;
import com.Sistema.Venta.Repository.IRepositorioCliente;
 

@Service
public class ServiceClienteImpl implements IServiceCliente {

	@Autowired
	private IRepositorioCliente repoCliente;
	
	@Override
	public List<Cliente> getAll() {
		// TODO Auto-generated method stub
		return repoCliente.findAll();
	}

	@Override
	public Cliente getById(Long id) {
		// TODO Auto-generated method stub
		return repoCliente.findById(id).orElse(null);
	}

	@Override
	public Cliente addCliente(Cliente cliente) {
		// TODO Auto-generated method stub
		return repoCliente.save(cliente);
	}

	@Override
	public Cliente update(Long id, Cliente cliente) {
		// TODO Auto-generated method stub
		Cliente c= this.getById(id);
		if(c==null) {
			new Throwable("No se encontro el cliente", new NotFoundException());
		}
		c.setNombre(cliente.getNombre());
		c.setApellido(cliente.getApellido());
		c.setDireccion(cliente.getDireccion());
		c.setEmail(cliente.getEmail());
		c.setTelefono(cliente.getTelefono());
		return repoCliente.save(c);
	}

	@Override
	public Cliente removeById(Long id) {

		Cliente c= this.getById(id);
		if(c==null) {
			new Throwable("No se encontro el cliente", new NotFoundException());
		}
		repoCliente.delete(c);
		return c;
	}

	@Override
	public Cliente agregarCuenta(Cuenta cuenta, Long id) {

		Cliente c= this.getById(id);
		if(c==null) {
			new Throwable("No se encontro el cliente", new NotFoundException());
		}
		 
		if(c.getCuentas()== null) {
			
		c.setCuentas(new ArrayList<Cuenta>());
		}
	
		c.getCuentas().add(cuenta);
		repoCliente.save(c);
		
		return c;
	}

}
