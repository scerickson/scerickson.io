---
title: 'How should I talk to my server?'
date: '2021-10-05T00:00:00Z'
---

Choosing the right API architecture is a critical decision when building modern web applications. REST, GraphQL, and tRPC are three popular approaches, each with its strengths and weaknesses. Depending on your team structure, project size, and use case, one may be a better fit than the others.

In this article, we'll compare tRPC, REST, and GraphQL, and discuss when each is the right tool for the job.

## REST: The Classic Workhorse

REST (Representational State Transfer) has been the dominant architecture for web APIs for over a decade. It's simple, widely understood, and works well for most scenarios. REST APIs expose resources via HTTP endpoints, and developers interact with these endpoints using standard HTTP methods like GET, POST, PUT, and DELETE.

### When to Use REST:

- **Simplicity**: REST is straightforward to implement and works out of the box for most CRUD operations.
- **Decoupling Frontend and Backend**: REST enforces a clear separation between frontend and backend, which can be beneficial in larger organizations where teams are independently responsible for these components.
- **Caching**: REST leverages HTTP caching mechanisms effectively, making it a good choice for scenarios where caching is essential.
- **Standardized**: REST is supported by a wide variety of tools and libraries, and its conventions are well understood by developers worldwide.

### Drawbacks of REST:

- **Over-fetching and Under-fetching**: REST endpoints typically return predefined data structures, which can lead to over-fetching (retrieving more data than necessary) or under-fetching (requiring multiple requests to gather all needed data).
- **Rigid Structure**: RESTful APIs follow strict guidelines, which can sometimes make it challenging to evolve an API without breaking existing clients.

## GraphQL: Flexibility at Scale

GraphQL was developed by Facebook to solve some of the limitations of REST. Unlike REST, which relies on predefined endpoints, GraphQL allows clients to request exactly the data they need. It offers a powerful query language, enabling clients to interact with a single API endpoint and shape their responses.

### When to Use GraphQL:

- **Complex Data Requirements**: If your application needs to fetch deeply nested or related data in a single request, GraphQL shines. It reduces the need for multiple round trips to different endpoints, as clients can retrieve precisely what they need.
- **Evolving Frontends**: In environments where the frontend is changing frequently or multiple frontends (mobile, web, etc.) are consuming the same API, GraphQL allows for more flexible and tailored data fetching.
- **Microservices**: GraphQL can act as a single API gateway that aggregates data from multiple microservices, offering a unified interface for the client.

### Organizational Considerations:

GraphQL's power comes with complexity, particularly on the backend. Managing permissions, query complexity, and caching can become challenging as your API grows. GraphQL often requires careful schema design, and maintaining large-scale GraphQL services can become an organizational challenge.

If you have a large team or enterprise-level needs, GraphQL can provide the flexibility required. However, it's important to recognize that much of GraphQL's complexity is organizational, and it may not be the best choice for smaller teams or simpler projects.

### Drawbacks of GraphQL:

- **Overhead**: For smaller applications or teams, the added complexity of managing a GraphQL schema, optimizing queries, and handling security concerns can be overkill.
- **Caching Challenges**: While possible, caching in GraphQL can be more complex than in REST due to the dynamic nature of its queries.
- **Query Complexity**: Without careful monitoring, GraphQL can lead to performance issues if clients make overly complex or expensive queries.

## tRPC: Simplicity for Full-Stack Type Safety

tRPC is a relatively new API paradigm that offers type-safe communication between frontend and backend in TypeScript projects. It allows developers to define API routes with minimal boilerplate and automatically infer types across the full stack, eliminating the need to manually write client SDKs or define complex schemas.

tRPC works particularly well in environments where both the frontend and backend are tightly coupled, such as small full-stack teams or single-developer projects.

### When to Use tRPC:

- **Small Full-Stack Teams**: tRPC excels when the same team (or person) is building both the frontend and backend. Its type inference ensures that API contracts are always in sync, preventing many common bugs.
- **Fast Prototyping**: If you're building a new project and want to move quickly, tRPC's minimal setup and automatic type-safety can save time and reduce friction.
- **TypeScript Everywhere**: tRPC is designed for TypeScript-first environments, making it a natural choice if your project is already using TypeScript on both the frontend and backend.
- **No Overhead of Schemas**: Unlike GraphQL, which requires the maintenance of a schema, tRPC automatically derives types from your code, keeping things lightweight.

### Drawbacks of tRPC:

- **Tight Coupling**: tRPC is best suited for tightly coupled frontend and backend teams. In larger organizations where the frontend and backend teams are separate, REST or GraphQL may provide better decoupling.
- **Lack of Flexibility**: tRPC is primarily designed for TypeScript and may not be the best choice if you're working with other languages or need to support a more diverse tech stack.
- **Limited Tooling**: tRPC doesn't have the same level of mature tooling or ecosystem support as REST or GraphQL, which can be a limiting factor for larger projects.

## Making the Right Choice

When deciding between REST, GraphQL, and tRPC, it's essential to consider your project's needs, your team's structure, and the long-term maintainability of the API.

- **Choose REST** if you need a simple, well-understood API that separates frontend and backend responsibilities clearly. REST works well for most standard web applications and is supported by a mature ecosystem of tools.

- **Choose GraphQL** if your application has complex data needs, or you want to provide flexibility to clients in terms of the data they can request. Be prepared for added complexity in schema design and performance management, which can require a more robust organizational structure.

- **Choose tRPC** if you're part of a small team building both the frontend and backend in TypeScript. tRPC's type-safety, speed, and minimal setup can help you ship features faster without worrying about maintaining complex API contracts.

Each of these approaches has its place, and understanding the strengths and weaknesses of each will help you make the right choice for your next project.
