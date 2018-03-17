package testje;

import bier.webshop.Bestelling;
import bier.webshop.GetPaymentRequest;
import bier.webshop.GetPaymentResponse;
import bier.webshop.Payment;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;


@Endpoint
public class PaymentEndpoint {
    private static final String NAMESPACE_URI = "bier/webshop";

   // private PaymentRepository paymentRepository;

  /*  @Autowired
    public PaymentEndpoint(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
*/  String getPaymentInfo(boolean status) {
        if(status) {
            return "Betaling was succesvol!";
        }else {
            return "Betaling is helaas niet gelukt!";
        }
    }
    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getPaymentRequest")
    @ResponsePayload
    public GetPaymentResponse getPaymentResponseg(@RequestPayload GetPaymentRequest request) {
        Payment payment = new Payment();
        payment.setSuccess(true); // betaling succesvol
        payment.setMessage(getPaymentInfo(true)); // haal het bericht op dat bij een status hoort.
        Bestelling bestelling = new Bestelling();
        bestelling.setBestelid(request.getBestelid());
        payment.setBestelling(bestelling);
        GetPaymentResponse response = new GetPaymentResponse();
        response.setPayment(payment);

        return response;
    }
}