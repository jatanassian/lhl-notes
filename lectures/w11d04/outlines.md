# Database Design

## Most important part of a web app

- Front-end / UI
- Back-end
- Database

Data is the most essential component of a web app.
Front-end and back-end can be rebuilt
Ex: you lose all the users/posts/comments/customers history
Important to secure it and design it properly

## Inside a database

1. Database
2. Tables
3. Columns / Fields
4. Rows / Records

## Naming conventions (for PostgreSQL)

### Tables

- snake_case
- usually plural
- no convention between uppercase and lowercase
- Example: pets, Pets, more_tables...

### Columns

- singular

pets

- id or pet_id | serial (auto-incrementing)
- name | text
- breed | text
- age | age
- colour | text

owners

- id | serial
- name | text

## Types of relationships

### One to One (rare)

user

- id
- name

user_profile

- id
- user_id
- profile_picture
- birthday

### One to Many

pets

- id or pet_id | serial (auto-incrementing)
  - PK = primary key (unique identifier) (indexed) Can be any data type
- owner_id| integer
  - FK = Foreign Key (points to another table)
- name | text
- breed | text
- age | age
- colour | text

owners

- id | serial
- name | text
- pet_id FK = what if owner has multiple pets?
<!-- Remove the last line -->

### Many to Many

pets

- id or pet_id | PK | serial (auto-incrementing)
- name | text
- breed | text
- age | age
- colour | text

owners_pets

- id | PK | serial
- owner_id | FK | integer
- pet_id | FK | integer

owners

- id | PK | serial
- name | text

## Data Types

https://www.postgresql.org/docs/current/datatype.html

- use generic data types in case of migrating to another database system (use integer instead of smallint)
- numeric
  - smallint / bigint were useful when storage was the main issue with databases
  - now it's less of an issue, focus is on performance/speed
  - can use integer for prices or even time
- monetary (tzo decimal)
- character types
  - text more common
  - varchar is common too if you have a maximum length
- binary
  - if storing files
  - not recommended
- date/time
  - multiple options (date no time, time no date, timezone or not)
- boolean
  - not just true/false
  - usually with toggle options and a default option
  - ex: is_admin
- enumerated
  - not recommended, not intuitive
  - error not clear
  - more likely to have a text and then backend/frontend enforce the options limitations
- arrays
  - not recommended
  - if you have a list you should usually be able to make it its own table
- composite
  - merging two data
  - not recommended
  - usually frontend or backend in charge of it, ex: full name
- most common ones: numeric, money, text, date, boolean

## Design concepts

- required fields (is the column mandatory?)

```HTML
<form>
  <input required />
</form>
```

- default values
  (if field submitted is null, use a default value instead)
- data deletion
  - soft delete: boolean flag (is_active) or move row to a deletion table (deleted_users) and then hard delete the original table
- calculated fields: let your front/back end handle it
- avoid array data types
- avoid enums
