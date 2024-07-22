package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="product")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Product extends BaseEntity {
	
	@Column(length = 20)
	private String name;
	@Column(length = 50)
	private String details;
	@Column
	private double price;
	@Column
	private double discount;
	
	
	
}
