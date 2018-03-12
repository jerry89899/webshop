import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
@EntityScan(basePackages = {
        "Business.Domain"
})
@ComponentScan(basePackages = {
        "Business",
        "DataAccess"
})
public class DomainBundler {
}
