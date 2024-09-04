---
title: 'Tyranical abstractions'
date: '2020-01-25T00:00:00Z'
---

In software development, abstractions are powerful tools that allow us to simplify complex problems, reduce redundancy, and enable better code reuse. When done right, abstractions are the foundation of scalable, maintainable systems. But what happens when an abstraction goes wrong?

## What is a "Tyrannical Abstraction"?

A "tyrannical abstraction" is an abstraction that, rather than serving the needs of the developer, imposes an inflexible and rigid structure on the code. These abstractions often make it difficult to write exceptions or deviations, forcing developers into a narrow path that doesn’t always fit their use case. The tyranny of such abstractions is that they create more complexity than they remove, ironically defeating the very purpose of abstraction.

### Characteristics of Tyrannical Abstractions

Tyrannical abstractions often display some or all of the following characteristics:

1. **Over-Engineering**: The abstraction attempts to account for every possible use case upfront, leading to an over-complicated design that covers too much ground. This forces developers to adapt their code to fit the abstraction's assumptions, even if it isn't a natural fit.
2. **Rigidness**: A good abstraction should provide flexibility. A bad one, on the other hand, dictates how things _must_ be done, making it difficult or impossible to handle edge cases or unusual requirements.

3. **Leaky Abstractions**: A "leaky" abstraction is one where the internal details you’re trying to hide inevitably bubble up to the surface. A leaky abstraction doesn’t adequately shield the developer from the complexity it was meant to abstract away.

4. **Poor Extensibility**: Often, tyrannical abstractions do not easily allow for extension or modification without breaking existing behavior or writing convoluted code. Adding a new feature or exception becomes a nightmare of patchwork.

5. **Dogmatic Implementation**: The creators of the abstraction assume that their way is the _only_ way. These abstractions often don’t adapt well to the evolution of the codebase or changing business needs.

## How to Identify a Tyrannical Abstraction

It can be tricky to identify a tyrannical abstraction early in its development, but there are a few tell-tale signs to watch for:

### 1. **Too Many Workarounds**

If you find yourself constantly adding edge cases, writing convoluted adapters, or using "hacks" to bypass the abstraction, that’s a red flag. A well-designed abstraction should simplify the majority of your cases, not force workarounds.

### 2. **Frequent Violations of Single Responsibility Principle**

If your abstraction ends up doing too much, crossing boundaries between responsibilities, it can lead to complexity and inflexibility. An abstraction should have a focused purpose.

### 3. **Resistance to Change**

If modifying the abstraction to suit a new requirement requires massive rewrites or breaks the core design, it may be too rigid. Abstractions should allow for evolution without overhauling the system.

### 4. **Lack of Local Reasoning**

If the abstraction forces you to consider too many external systems or make assumptions about the entire codebase, it may be over-engineered. You should be able to reason about a piece of code locally without understanding every piece of the abstraction.

### 5. **Difficulty Onboarding Developers**

When it takes new developers a long time to understand how to use an abstraction because of hidden complexities or rigid structures, that’s a warning sign. A well-crafted abstraction should be intuitive and easy to pick up.

## How to Avoid Tyrannical Abstractions

### **Start Small**

Don’t try to solve every problem upfront. Design your abstractions to solve the problem at hand first, and allow for future evolution.

### **Favor Composition Over Inheritance**

Instead of building a monolithic, one-size-fits-all abstraction, consider composing smaller, focused abstractions. This allows greater flexibility and reuse without imposing unnecessary restrictions.

### **Test Against Real-World Cases**

Before finalizing an abstraction, ensure it works well in real-world scenarios, including the edge cases. The abstraction should not just be theoretically sound; it should also be practically useful.

### **Embrace Change**

Build abstractions that are flexible and can adapt to future changes. If an abstraction is too rigid, it will become a liability as the codebase grows and requirements evolve.

### **Keep It Simple**

Resist the temptation to build overly complex abstractions that cover every imaginable scenario. Sometimes, a simpler, less abstracted solution is more practical and easier to extend.

## Conclusion

Abstractions are powerful, but they can become tyrannical if misused. A good abstraction should reduce complexity, not introduce new layers of it. By watching for the warning signs of tyrannical abstractions and designing with flexibility and simplicity in mind, you can avoid the trap of rigid, over-engineered solutions that end up constraining your code instead of empowering it.
