package com.Sistema.Venta.Services;

import java.util.List;

public interface ICrudGenerico <T,K>{

	List<T> getAll();
	T getById(K id);
	T save (T entity);
	T update (K id, T entity);
	T delete (K id);
	
}
