package Business.Domain.Product;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Timestamp;

@Entity
public class Aanbieding {

    @ManyToOne
    @JoinColumn(name = "Productid")
    private Product product;
    @Id
	private Long id;
	private Timestamp vanDatum;
	private Timestamp totDatum;
	private String reclameTekst;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getVanDatum() {
        return vanDatum;
    }

    public void setVanDatum(Timestamp vanDatum) {
        this.vanDatum = vanDatum;
    }

    public Timestamp getTotDatum() {
        return totDatum;
    }

    public void setTotDatum(Timestamp totDatum) {
        this.totDatum = totDatum;
    }

    public String getReclameTekst() {
        return reclameTekst;
    }

    public void setReclameTekst(String reclameTekst) {
        this.reclameTekst = reclameTekst;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}