package Business.Domain.Product;

import javax.persistence.*;
import java.util.*;

@Entity
public class Product {

	@ManyToMany
	@JoinTable(name = "productcategorie",
			joinColumns = @JoinColumn(name = "Productid", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "Categorieid", referencedColumnName = "id"))
	private Collection<Categorie> Categorieen;
	@Id
	private Long id;
	private String plaatje;
	private String naam;
	private String omschrijving;
	private double prijs;

	public double getFinalPrice() {
		// TODO - implement Product.getFinalPrice
		throw new UnsupportedOperationException();
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

	public String getNaam() {
		return naam;
	}

	public void setNaam(String naam) {
		this.naam = naam;
	}

	public String getOmschrijving() {
		return omschrijving;
	}

	public void setOmschrijving(String omschrijving) {
		this.omschrijving = omschrijving;
	}

	public double getPrijs() {
		return prijs;
	}

	public void setPrijs(double prijs) {
		this.prijs = prijs;
	}

	public Collection<Categorie> getCategorieen() {
		return Categorieen;
	}

	public void setCategorieen(Collection<Categorie> categorieen) {
		Categorieen = categorieen;
	}
}