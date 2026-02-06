---
title: "Detecting Circular Type References in GraphQL Schemas"
summary: "ZAP can now detect cycles in GraphQL schemas that could lead to denial of service attacks."
images:
- https://www.zaproxy.org/blog/2026-02-06-detecting-graphql-cycles/images/cover.png
type: post
tags:
- blog
- graphql
date: "2026-02-06"
authors:
- akshath
---

The ZAP [GraphQL add-on](/docs/desktop/addons/graphql-support/) can now automatically detect circular type references in imported schemas!

When you import a GraphQL schema into ZAP, it will analyze the object types and identify any cycles where types reference each other in a loop. For example, a cycle might look like:

```
Query -> (Organization -> Repository -> PullRequest -> Commit -> Organization)
```

This is a security concern because attackers can exploit these circular references to craft deeply recursive queries, potentially causing Denial of Service (DoS) conditions on your GraphQL server.

## How It Works

The cycle detection uses a combination of two well-known graph algorithms:

1. **[Tarjan's algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)** - Finds strongly connected components in the type graph
2. **[Johnson's algorithm](https://en.wikipedia.org/wiki/Johnson%27s_algorithm)** - Identifies unique cycles within those components

When cycles are detected, ZAP raises an alert for each unique cycle found. The alert includes:

**The cycle path**
```
Query -> (PasteObject -> OwnerObject -> PasteObject)
```

**An example query** that demonstrates the circular reference. This query is generated using the configured query generator options (e.g. POST with JSON body, POST with GraphQL body, etc.)

```graphql
query {
  paste(id: 1, title: "ZAP") {
    owner {
      paste {
        burn
      }
    }
  }
}
```

> [!TIP]
> You can quickly open the generated query in the Requester with the `ctrl / cmd + w` shortcut.

No actual requests are sent during detection - this is a static analysis of the schema itself.

## Configuration Options

You can configure the cycle detection behavior in the GraphQL options panel or via the automation framework:

### Detection Mode

- **Disabled** - Skip cycle detection entirely
- **Quick** - Find one cycle per starting node (faster, default)
- **Exhaustive** - Find all possible cycles (more thorough)

### Maximum Alerts

You can limit the number of cycle alerts raised (default: 100) to prevent alert fatigue in schemas with many circular references.

Visit the [alert details page](/docs/alerts/50007-3/) for a sample of the details included in a cycle detection alert.

## Using with the Automation Framework

You can configure cycle detection in your automation framework YAML:

```yaml
jobs:
  - type: graphql
    parameters:
      endpoint: "https://example.com/graphql"
      cycleDetectionMode: quick        # disabled, quick, or exhaustive
      maxCycleDetectionAlerts: 100     # maximum alerts to raise
```

## Remediation

If ZAP detects circular references in your schema, consider:

1. **Restructuring the schema** - Use IDs or foreign keys instead of direct object references where possible
2. **Enforcing query depth limits** - Limit how deep queries can nest
3. **Using pagination** - Control the amount of data returned in nested queries
4. **Implementing query complexity analysis** - Reject queries that exceed a complexity threshold

For more guidance, see the [OWASP GraphQL Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html#dos-prevention).

## Credits

Thanks to the book [Black Hat GraphQL](https://nostarch.com/black-hat-graphql) for the inspiration on which algorithms to use for this feature.
