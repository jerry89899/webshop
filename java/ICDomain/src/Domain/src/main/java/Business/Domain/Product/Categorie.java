package Business.Domain.Product;

import javax.persistence.*;
import java.util.*;

@Entity
public class Categorie {

	@ManyToMany
	@JoinTable(name = "productcategorie",
			joinColumns = @JoinColumn(name = "Productid", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "Categorieid", referencedColumnName = "id"))
	private Collection<Product> Producten;
	@Id
	private Long id;
	private String plaatje;
	private String omschrijving;
	private String name;

	public Collection<Product> getProducten() {
		return Producten;
	}

	public void setProducten(Collection<Product> producten) {
		Producten = producten;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlaatje() {
		return plaatje;
	}

	public void setPlaatje(String plaatje) {
		this.plaatje = plaatje;
	}

	public String getOmschrijving() {
		return omschrijving;
	}

	public void setOmschrijving(String omschrijving) {
		this.omschrijving = omschrijving;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}