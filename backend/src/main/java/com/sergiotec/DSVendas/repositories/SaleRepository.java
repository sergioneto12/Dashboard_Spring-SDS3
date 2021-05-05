package com.sergiotec.DSVendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sergiotec.DSVendas.dto.SaleSucessDTO;
import com.sergiotec.DSVendas.dto.SaleSumDTO;
import com.sergiotec.DSVendas.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long>{

	@Query("SELECT new com.sergiotec.DSVendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.sergiotec.DSVendas.dto.SaleSucessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSucessDTO> sucessGroupedBySeller();
}
