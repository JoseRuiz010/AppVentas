package com.Sistema.Venta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Sistema.Venta.Model.Entity.LineaDeCuenta;

@Repository
public interface IRepositorioLineaDeCuenta extends JpaRepository<LineaDeCuenta, Long> {

}
