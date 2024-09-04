---
title: 'Why I choose monolith'
date: '2023-05-16T00:00:00Z'
---

The decision between building a monolithic application, going serverless, or using Kubernetes to manage containers is one every developer faces today. Each approach comes with its own set of trade-offs, and while serverless and Kubernetes are attractive and trendy, I find that, for most teams and projects, the monolithic approach is still the best choice.

Let's explore why I'm leaning towards monoliths for many use cases, and when serverless and Kubernetes might be better suited.

## The Monolith: Simple and Effective

A monolithic architecture is the traditional approach where an entire application is built and deployed as a single unit. This means all of the application's functionality—frontend, backend, and database logic—is packaged together and deployed as one.

### Why Choose a Monolith?

1. **Simplicity**:
   Monolithic architectures are simple to develop, deploy, and debug. There’s no need to worry about the complexities of microservices, container orchestration, or abstracting away the infrastructure. For smaller teams or solo developers, this simplicity translates to faster development cycles and easier maintenance.

2. **Easier Local Development**:
   A monolithic app can be run locally with all its parts functioning together. You don’t have to worry about spinning up multiple services, managing API gateways, or simulating complex cloud environments in development.

3. **Lower Overhead**:
   A monolith can be deployed on a single server, often with little overhead. There's no need for orchestrating multiple containers, provisioning cloud resources, or configuring serverless deployment pipelines. For most applications, this approach is cost-effective, especially in the early stages.

4. **Less Complexity**:
   While microservices and serverless functions offer scalability, they also come with a significant increase in complexity. Inter-service communication, latency issues, distributed tracing, and versioning can make even basic applications harder to manage. A monolith avoids these concerns by keeping everything together.

5. **You May Not Need Microservices**:
   For many projects, the scalability that microservices or serverless offers simply isn't needed. Unless your project has hit the point where scaling specific parts independently is essential, the overhead of managing these architectures may outweigh the benefits. In fact, many successful products grew to significant scale while remaining monolithic.

### When Monoliths Fall Short:

There are cases where monolithic architectures do begin to show their limits:

- **Scalability**: When you need to scale different parts of your system independently.
- **Team Size**: As teams grow, having many developers working on the same codebase can lead to coordination issues.
- **Deployment Frequency**: If different teams need to deploy different parts of the system at different times, monolithic releases can be a bottleneck.

For most small to medium-sized teams or projects, these issues are not a concern, which is why I favor monoliths. But let's look at serverless and Kubernetes for contrast.

## Serverless: The New Frontier

Serverless, popularized by services like AWS Lambda, Vercel, and more recently, frameworks like [SST](https://serverless-stack.com/), offers a way to run applications without managing infrastructure. Developers simply write functions, deploy them, and the cloud provider handles scaling, performance, and availability.

### Key Players in Serverless:

- **AWS Lambda**: The OG serverless platform, offering function-as-a-service (FaaS) where you pay only for the compute time you use.
- **Vercel**: A platform designed for frontend developers, particularly with frameworks like Next.js. Vercel abstracts infrastructure so you can focus on your app, while they take care of hosting, edge functions, and scaling.
- **SST (Serverless Stack)**: SST adds a framework layer on top of AWS Lambda and AWS services, offering more developer-friendly tools to manage serverless apps with local development capabilities.

### Why Choose Serverless?

1. **Scalability**: Serverless functions automatically scale with your traffic. You don't have to worry about provisioning servers or handling traffic spikes.
2. **Pay-per-use**: With serverless, you only pay for the actual compute time you use, making it cost-efficient for applications with unpredictable or low traffic.
3. **Infrastructure Abstraction**: Serverless platforms like Vercel abstract away most infrastructure concerns, allowing developers to focus purely on writing code.

### Drawbacks of Serverless:

1. **Cold Starts**: Serverless functions, particularly those on AWS Lambda, suffer from cold starts—latency issues that arise when a function hasn’t been invoked for a while.
2. **Limited Control**: You have limited control over the infrastructure, which can be a drawback if you need to fine-tune performance or rely on specific infrastructure setups.
3. **Complexity with State**: Serverless functions are stateless by design, which can make working with state or long-running processes more complex. You need to architect around these limitations using additional services like databases or message queues.

Serverless is great for certain use cases, such as event-driven architectures, small isolated services, or when you don’t want to manage infrastructure at all. But its abstractions can sometimes feel limiting, especially when your app grows in complexity.

## Kubernetes: Containers at Scale

Kubernetes is a powerful container orchestration platform that automates the deployment, scaling, and management of containerized applications. It’s designed to manage distributed systems and allows for fine-grained control over your app's infrastructure.

### When to Use Kubernetes:

1. **Complex Deployments**: If your app consists of multiple services or containers, Kubernetes can help manage these at scale. It's especially useful for larger organizations with microservice architectures.
2. **Multi-Cloud or Hybrid Environments**: Kubernetes abstracts away the underlying infrastructure, allowing you to run your containers on any cloud provider or on-premises servers.
3. **Granular Control**: Kubernetes gives you deep control over your app’s environment, from auto-scaling policies to rolling updates and failover mechanisms.

### Drawbacks of Kubernetes:

1. **Overhead**: For small teams, the complexity and operational overhead of managing Kubernetes clusters may be overkill. You’ll need DevOps expertise to get the most out of it.
2. **Setup Complexity**: Getting started with Kubernetes can be challenging. It requires managing nodes, services, load balancers, and networking—all of which add complexity to your stack.
3. **Resource-Intensive**: Kubernetes clusters tend to consume significant resources, both in terms of cost and compute power, which might not be necessary for smaller applications.

For large-scale projects or teams that need to manage hundreds of services, Kubernetes can be a game-changer. But for smaller teams, the learning curve and operational overhead can slow down development.

## Why Monolith Makes Sense for Most Teams

While serverless and Kubernetes offer exciting possibilities, for most small to medium teams, a monolithic approach is still the best bet. Here’s why:

1. **Speed of Development**: When you're just starting out or have a small team, speed matters. A monolith allows you to iterate quickly without getting bogged down in managing complex infrastructure.
2. **Lower Cognitive Load**: Managing a monolith is often simpler, requiring fewer mental gymnastics around service boundaries, API contracts, or cloud infrastructure.
3. **Easier to Debug**: Monolithic apps can be debugged more easily than distributed systems. You can trace problems through a single codebase rather than across services.
4. **Future Evolution**: Monoliths don’t have to stay monolithic forever. If your app grows and needs to scale, you can extract services into microservices or serverless functions down the line.

## Conclusion

In the end, there’s no one-size-fits-all solution. However, for most developers—especially small to medium teams—monoliths offer a straightforward, low-complexity approach to building robust applications. While serverless and Kubernetes bring significant power, they also come with operational complexity and learning curves that aren't always worth the trade-off, especially early on.

Start simple, and evolve as your needs grow. The monolith isn't going away anytime soon—and for good reason.
