import { routes } from "./routes/index";

const server = Bun.serve({
  port: 3000,
  routes: {
    ...routes
  },
  fetch(req){
    return Response.json({ message: "Not Found" }, { status: 404 });
  }
});

console.log(`Server running at http://localhost:${server.port}`);