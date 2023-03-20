package com.Sistema.Venta.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.Sistema.Venta.Model.Entity.LineaDeCuentaConSaldo;
import com.Sistema.Venta.Repository.IRepositorioLineaDeCuentaConSaldo;


@Service
public class ServiceLineaDeCuentaConSaldo implements IServicesLineaDeCuentaConSaldo {

	@Autowired
	private IRepositorioLineaDeCuentaConSaldo repoConSaldo;
	
	
	@Override
	public List<LineaDeCuentaConSaldo> getAll() {
		// TODO Auto-generated method stub
		return repoConSaldo.findAll();
	}

	@Override
	public LineaDeCuentaConSaldo getById(Long id) {
		// TODO Auto-generated method stub
		return repoConSaldo.findById(id).orElse(null);
	}

	@Override
	public LineaDeCuentaConSaldo save(LineaDeCuentaConSaldo entity) {
		// TODO Auto-generated method stub
		return repoConSaldo.save(entity);
	}

	@Override
	public LineaDeCuentaConSaldo update(Long id, LineaDeCuentaConSaldo entity) {
		LineaDeCuentaConSaldo ldcs= getById(id);
		if (ldcs!=null) {
			new Throwable("No se encontro la linea de cuenta con id "+id,new NotFoundException());
		}
		ldcs.setDescripcion(entity.getDescripcion());
		ldcs.setMonto(entity.getSubtotal());
		return repoConSaldo.save(ldcs);
	}

	@Override
	public LineaDeCuentaConSaldo delete(Long id) {
		LineaDeCuentaConSaldo ldcs= getById(id);
		if (ldcs!=null) {
			new Throwable("No se encontro la linea de cuenta con id "+id,new NotFoundException());
		}
		 
		repoConSaldo.delete(ldcs);
		return ldcs;
	}

}
