import express from "express";
import http from "http";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import loadMergeSchema from "./libs/loadMergedSchema";
import { Resolvers } from "./resolvers";
import { createApolloContext } from "./context/createApolloContext";
import { errorHandler } from "./context/errorHandler";

dotenv.config();

async function startApolloServer() {
  const PORT = process.env.PORT || 8000;
  const app = express();
  const httpServer = http.createServer(app);
  const context: any = createApolloContext();

  const schema = makeExecutableSchema({
    typeDefs: loadMergeSchema,
    resolvers: Resolvers,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    csrfPrevention: false, // true in production
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageGraphQLPlayground()
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
    formatError: errorHandler,
  });

  await server.start();

  app.use(graphqlUploadExpress());
  app.set("trust proxy", "loopback");

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context,
    })
  );

  await new Promise<void>((resolve) => {
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql`);
    return httpServer.listen({ port: PORT }, resolve);
  });
}

startApolloServer();
