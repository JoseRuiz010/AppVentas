package com.Sistema.Venta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.LineaDeCuentaConProducto;
import com.Sistema.Venta.Repository.IRepositorioLineaDeCuentaConProducto;

@Service
public class ServiceLineaDeCuentaConProductoImpl implements IServiceLineaDeCuentaConProducto {

	@Autowired
	IRepositorioLineaDeCuentaConProducto repoLineaConProducto;
	
	@Override
	public List<LineaDeCuentaConProducto> getAll() {
		// TODO Auto-generated method stub
		return repoLineaConProducto.findAll();
	}

	@Override
	public LineaDeCuentaConProducto getById(Long id) {
		// TODO Auto-generated method stub
		return repoLineaConProducto.findById(id).orElse(null);
	}

	@Override
	public LineaDeCuentaConProducto save(LineaDeCuentaConProducto entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LineaDeCuentaConProducto update(Long id, LineaDeCuentaConProducto entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LineaDeCuentaConProducto delete(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
