package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.pojos.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping
	public Product saveProductDetails(@RequestBody Product transientProduct) {
		return productService.add(transientProduct);

	}

	@DeleteMapping("/{id}")
	public ApiResponse deleteProductDetails(@PathVariable Long id) {
	
		return new ApiResponse(productService.delete(id));
	}

	@GetMapping("/{id}")
	public Product getProductDetails(@PathVariable Long id) {
		return productService.fetchById(id);
	}

	@PutMapping
	public Product updateProductDetails(@RequestBody Product detachedProduct) {
		return productService.update(detachedProduct);
	}

}
