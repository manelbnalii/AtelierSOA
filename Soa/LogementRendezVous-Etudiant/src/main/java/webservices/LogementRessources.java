package webservices;

import metiers.LogementBusiness;
import entities.Logement;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
@Path("/logement")
public class LogementRessources {
    LogementBusiness help = new LogementBusiness();
    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity(help.getLogements()).
                build();
    }

    public Response addLogement(Logement logement) {
        try {
            help.addLogement(logement);  // Appelle la méthode qui ajoute le logement à la base de données
            return Response
                    .status(201)
                    .entity(logement)  // Retourne le logement ajouté
                    .build();
        } catch (Exception e) {
            return Response
                    .status(500)
                    .entity("Error: " + e.getMessage())
                    .build();
        }
    }


}
