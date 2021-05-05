package com.sergiotec.DSVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sergiotec.DSVendas.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long>{

}
