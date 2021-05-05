package com.sergiotec.DSVendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sergiotec.DSVendas.dto.SellerDTO;
import com.sergiotec.DSVendas.entities.Seller;
import com.sergiotec.DSVendas.repositories.SellerRepositories;

@Service
public class SellerServices {
	
	@Autowired
	private SellerRepositories repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result =  repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
}
