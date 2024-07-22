package com.app.service;

import java.util.List;

import com.app.pojos.Product;

public interface ProductService {
	List<Product> getAllProducts();

	Product add(Product transientProduct);

	String delete(Long id);

	Product fetchById(Long id);

	Product update(Product detachedProduct);


}
