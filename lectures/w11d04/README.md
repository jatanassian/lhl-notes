# Lighthouse Labs | Database Design

[GitHub Repository](https://github.com/WarrenUhrich/lighthouse-labs-sql-from-our-apps/)

- [ ] Keys; what are they good for!?
- [ ] What's in a Name?
- [ ] Relationships Don't have to be Complicated
- [ ] Data... it just had to be Data
- [ ] Design Concepts
- [ ] ERDs
- [ ] Practice Makes Perfect

## Data is Royalty!

- Without data, most apps can't happen!
- How important is data to an application like Facebook or Twitter?
- If the UI died... effects and recovery?
- If the DATABASE died... effects and recovery? Data is SO important!

## Tables

- Composed of columns and rows
- Column / Field? Info defined for this table's records, all field names are singular, think `id`, `name`, `address`, etc.
- Row? A record, info for some or all columns, must have a unique PK (primary key)
- Typically named in `snake_case`, all table names are plural, think `users`, `articles`, etc.

## Keys; what are they good for!?

### Primary Keys

- Uniquely identify a particular record
- Unique within a table
- Can be any data-type (integer is recommended)
- PK should be id, simple and expected
- Used to represent and identify record, anything can be changed, but never change this value!!

### Foreign Keys

- Represents (and should be same data-type) as the PK in another table
- Used for describing relationships!
- Named as singular_id, like user_id

## What's in a Name (Common Conventions)

- May be different in any particular project or company, but `snake_case` is the norm!
- Always listen to your work.
- Different stacks sometimes have different conventions... Example) C# may ask you to use PascalCase in your MSSQL DB as a standard
- Most important thing is consistency!
- Usually plural nouns for table names, and singular nouns for their fields.

## Data... it just had to be Data (Types!)

[Visit the official documentation and see what is available to you](https://www.postgresql.org/docs/current/datatype.html).

- Every field must have a data-type associated with it
- Pick carefully, size stated does matter as this is allocated storage space!
- Think of this as drawers in a dresser... that space is there whether or not you have articles to place inside. EVERY single record has that space. What happens if you have 10 million USERS!?!?
- Doesn't matter much these days... storage is very very cheap. ElephantSQL, sign up with GitHub, and you get around half-a-million records for free.
- Time might be a problem down the road, when used as 32-bit integer! https://en.wikipedia.org/wiki/Year_2038_problem
- Design decisions... better to sort alphabetic, or faster as numeric greater/less-than?
- COULD store string instead of number, but team needs to agree and have reason
- (Positive-only) Prices often stored as cents, decimal simply added in output for an application
- ENUMs often unnecessary... difficult and risky to update as you expand
- Not big deal w/current storage availability, end up choosing 4-5 types in most cases

Simple is better... consider the following types when you can:

- [Integer](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-INT)
- [Character](https://www.postgresql.org/docs/current/datatype-character.html)
- [Date/Time](https://www.postgresql.org/docs/current/datatype-datetime.html)
- [Boolean](https://www.postgresql.org/docs/current/datatype-boolean.html)

## Relationships (Don't have to be Complicated)

- [One-to-One](<https://en.wikipedia.org/wiki/One-to-one_(data_model)>) (Single-to-Single): Argument is usually why not just include another column, unless it is uncommon for space-savings...
- [One-to-Many](<https://en.wikipedia.org/wiki/One-to-many_(data_model)>) (Many-to-One): Extremely column... maybe a user has many blog posts
- [Many-to-Many](<https://en.wikipedia.org/wiki/Many-to-many_(data_model)>): Common enough... think actors and movies! TONS of overlap in cases like this. Requires an extra table, so be careful!

## Design Concepts

- [Required fields](https://www.postgresql.org/docs/9.4/ddl-constraints.html)! Think of how the record is filled-in at time of creation... You CANNOT create a record without this!!! Most websites just ask for an e-mail address and a password, to get started. Simpler is better to get people in, or get a record started. Careful with use of required fields!
- [Default values](https://www.postgresql.org/docs/9.4/ddl-default.html)... Timestamp NOW(), active = true, onsale = false, id = autoincrement... Saves time and concern when creating new records
- [Calculated fields](https://www.postgresql.org/docs/12/ddl-generated-columns.html) - please NO (resist the urge...) firstname lastname = fullname concatenated... But now that you have a fullname, you no longer have a single place for truth, it is easy to forget to update all columns... better to use a SELECT later to combine these and have accurate info (also increases time to save record during CREATE or UPDATE)
- Try not to delete anything... it is often useful to have a record, and sometimes legally important to hold onto old records Think audits from government!! This is called [SAFE DELETE](https://medium.com/meroxa/creating-a-soft-delete-archive-table-with-postgresql-70ba2eb6baf3)! The idea is, your app simply marks a record as disabled or inactive (active=false)
- DRY... don't repeat! Think status, city, etc. ---> Make a new table versus an ENUM

## ERDs

Visit [https://draw.io/](https://draw.io/) and try drawing out some entity relationship diagrams! There are videos with great reminders on how to use the tool, like the one [here](https://www.youtube.com/watch?v=lAtCySGDD48). You can learn more about potential formatting practices [here](https://www.smartdraw.com/entity-relationship-diagram/).

Practice makes perfect, so keep at it!
