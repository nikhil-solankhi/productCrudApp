package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.Product;
import com.app.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepo;
	
	
	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}

	@Override
	public Product add(Product transientProduct) {
		// TODO Auto-generated method stub
		return productRepo.save(transientProduct);
	}

	@Override
	public String delete(Long id) {
		// TODO Auto-generated method stub
		if (productRepo.existsById(id)) {
			productRepo.deleteById(id);
			return "Product details deleted ....";
		}
		return "Deletion Failed : Invalid Id !!!!!!!!!!!";
	}

	@Override
	public Product fetchById(Long empId) {
		// TODO Auto-generated method stub
		return productRepo.findById(empId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID !!!!!"));
	}

	@Override
	public Product update(Product detachedProduct) {
		// TODO Auto-generated method stub
		if (productRepo.existsById(detachedProduct.getId())) {
			return productRepo.save(detachedProduct);
		}
		throw new ResourceNotFoundException("Invalid Id : Updation Failed!!!!!!!!");	}
	
}
