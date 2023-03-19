package com.Sistema.Venta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.LineaDeCuenta;
import com.Sistema.Venta.Repository.IRepositorioLineaDeCuenta;

@Service
public class ServiceLineaDeCuentaImpl implements IServiceLineaDeCuenta{
	
	@Autowired
	IRepositorioLineaDeCuenta repoLineaDeCuenta;

	@Override
	public List<LineaDeCuenta> getAll() {
		// TODO Auto-generated method stub
		return repoLineaDeCuenta.findAll();
	}

	@Override
	public LineaDeCuenta getById(Long id) {
		// TODO Auto-generated method stub
		return repoLineaDeCuenta.findById(id).orElse(null);
	}

	@Override
	public LineaDeCuenta save(LineaDeCuenta entity) {
		// TODO Auto-generated method stub
		return repoLineaDeCuenta.save(entity);
	}

	@Override
	public LineaDeCuenta update(Long id, LineaDeCuenta entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LineaDeCuenta delete(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
