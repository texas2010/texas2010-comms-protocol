`[entity].[action].[context]` Naming Convention

This format defines a consistent structure for all events and messages across services.

Formula:

```
[entity].[action].[context]
```

Parts:

entity – What the event or message is about.
Can be a database model (user, timer), service (torn, cache), or system component (system, cron).

action – What is happening or being done.
Examples: create, update, refresh, delete, cleanup, sync.

context – Why or how this message exists.
Defines the communication intent or phase.
Common examples:

request → ask another service to perform an action

result → return a successful outcome

error → return a failed outcome

command → instruct a service to perform a task (one-way)

schedule → triggered by a timed or automated job

broadcast → announce an event to all listeners

Example Uses:

Example Meaning
user.create.request API asks Database to create a user
user.create.result Database confirms the user was created
torn.update.command Cron instructs Torn service to run an update
system.refresh.schedule Cron triggers a scheduled system refresh
cache.cleanup.broadcast Cache service announces cleanup finished
