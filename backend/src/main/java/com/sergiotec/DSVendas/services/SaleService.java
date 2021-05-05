package com.sergiotec.DSVendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sergiotec.DSVendas.dto.SaleDTO;
import com.sergiotec.DSVendas.entities.Sale;
import com.sergiotec.DSVendas.repositories.SaleRepository;
import com.sergiotec.DSVendas.repositories.SellerRepositories;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepositories sellerRepositories;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepositories.findAll();
		Page<Sale> result =  repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
}
