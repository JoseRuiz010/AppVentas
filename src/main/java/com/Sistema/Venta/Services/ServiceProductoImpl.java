package com.Sistema.Venta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.Producto;
import com.Sistema.Venta.Repository.IRepositorioProducto;

@Service
public class ServiceProductoImpl implements IServiceProducto {
	
	@Autowired
	IRepositorioProducto repoProducto;

	@Override
	public List<Producto> getAll() {
		// TODO Auto-generated method stub
		return repoProducto.findAll();
	}

	@Override
	public Producto getById(Long id) {
		// TODO Auto-generated method stub
		return repoProducto.findById(id).orElse(null);
	}

	@Override
	public Producto save(Producto entity) {
		// TODO Auto-generated method stub
		return repoProducto.save(entity);
	}

	@Override
	public Producto update(Long id, Producto entity) {
		Producto p = getById(id);
		if(p!=null){
			p.setDescripcion(p.getDescripcion());
			p.setCapacidad(p.getCapacidad());
			p.setPrecio(p.getPrecio());
			p.setLineaProducto(p.getLineaProducto());			
		}
		return repoProducto.save(p);
	}

	@Override
	public Producto delete(Long id) {
		Producto p = getById(id);
		if(p!=null){
			 repoProducto.delete(p);
			 return p;
		}
		return null;
	}

}
