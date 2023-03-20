package com.Sistema.Venta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Sistema.Venta.Model.Entity.LineaDeCuentaConProducto;

@Repository
public interface IRepositorioLineaDeCuentaConProducto extends JpaRepository<LineaDeCuentaConProducto, Long> {

}
