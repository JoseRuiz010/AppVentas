package com.Sistema.Venta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.Vendedor;
import com.Sistema.Venta.Repository.IRepositorioVendedor;

@Service
public class ServiceVendedorImpl implements IServiceVendedor{

	@Autowired
	private IRepositorioVendedor repoVendedor;
	
	@Override
	public List<Vendedor> getAll() {
		// TODO Auto-generated method stub
		return repoVendedor.findAll();
	}

	@Override
	public Vendedor getById(Long id) {
		// TODO Auto-generated method stub
		return repoVendedor.findById(id).orElse(null);
	}

	@Override
	public Vendedor save(Vendedor entity) {
		// TODO Auto-generated method stub
		return repoVendedor.save(entity);
	}

	@Override
	public Vendedor update(Long id, Vendedor entity) {
		Vendedor v= getById(id);
		
		if(v==null) {
			new Throwable("No se encontro el vendedor",new NotFoundException());
		}
		
		v.setNombre(entity.getNombre());
		v.setApellido(entity.getApellido());
		v.setDireccion(entity.getDireccion());
		v.setEmail(entity.getEmail());
		v.setTelefono(entity.getTelefono());
		v.setLegajo(entity.getLegajo());
		
		return repoVendedor.save(v);
	}

	@Override
	public Vendedor delete(Long id) {
	Vendedor v= getById(id);
		
		if(v==null) {
			new Throwable("No se encontro el vendedor",new NotFoundException());
		}// TODO Auto-generated method stub
		
		repoVendedor.delete(v);
		return v;
	}

}
