import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "Controller"
})
public class Runner {

    public static void main(String[] args) {
        new SpringApplicationBuilder().sources(DomainBundler.class, Runner.class).run(args);
    }
}
