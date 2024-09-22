# Behavio task: React

## Introduction
To define respondent groups in the data analysis part of our work we use a simple _s-expression_-based mini language. 
To make the language easier to grasp for newcomers, we'd like to display the expressions as a tree or a helpful error if they don't parse.

## Task
We'd like you to create a simple React + Next.js app using some established component library (MUI, Tailwind, Fluent UI) featuring one page with two controls:

- a text area on the left accepts one or more _s-expressions_
  - use https://github.com/fwg/s-expression for parsing
  - hint: wrap multiple expressions in `()` to parse all in one go
  - display a simple validation error if the contents do not parse
- a tree on the right, displaying the parse tree

Please hand in your solution via git into this repository. Structure your work as if you were cooperating with a team.

## Example input
```
(label all ())

(label prof-manual (has self.profession1 manual))
(label prof-bile_limecky (all (except self.profession1 manual) (except self.profession3 jiny)))
(label prof-it (has self.profession1 it))
(label prof-fin_bank (has self.profession1 finance bank))
(label prof-sale (has self.profession1 sale))

(label sex-muzi (has self.sex man))
(label sex-zeny (has self.sex woman))

(label age-age_18_29 (lt self.age 30))
(label age-age_30_44 (all (gt self.age 29) (lt self.age 45)))
(label age-age_45_plus (gt self.age 44))

(label vzd-bez_maturity (has self.vzd basic vyuceni))
(label vzd-maturita (has self.vzd maturita))
(label vzd-vs (has self.vzd university))
```
