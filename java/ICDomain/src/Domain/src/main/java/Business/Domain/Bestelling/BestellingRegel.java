package Business.Domain.Bestelling;

import Business.Domain.Product.Product;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class BestellingRegel {

    @ManyToOne
    @JoinColumn(name = "Bestelid")
	private Bestelling Bestelling;
    @ManyToOne
    @JoinColumn(name = "Productid")
	private Product Product;
	@Id
	private Long id;
	private Integer aantal;
	private double prijs;

    public Business.Domain.Bestelling.Bestelling getBestelling() {
        return Bestelling;
    }

    public void setBestelling(Business.Domain.Bestelling.Bestelling bestelling) {
        Bestelling = bestelling;
    }

    public Business.Domain.Product.Product getProduct() {
        return Product;
    }

    public void setProduct(Business.Domain.Product.Product product) {
        Product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAantal() {
        return aantal;
    }

    public void setAantal(Integer aantal) {
        this.aantal = aantal;
    }

    public double getPrijs() {
        return prijs;
    }

    public void setPrijs(double prijs) {
        this.prijs = prijs;
    }
}