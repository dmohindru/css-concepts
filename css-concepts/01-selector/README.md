Practicing selectors will build a solid foundation for targeting elements efficiently in your CSS. Here are some exercises to get you started with each type of selector:

### Basic Selectors

- [Exercise 1](../../src/exercises/selector/exercise1/): Create three div elements with class names box, circle, and triangle. Use element selectors (div), class selectors (.box, .circle, .triangle), and ID selectors to style each element differently.
- [Exercise 2](../../src/exercises/selector/exercise2/): Make a simple list with multiple li elements. Use a class selector to style specific items (e.g., make every item with the class highlight have a yellow background).

### Combinator

- [Exercise 3](../../src/exercises/selector/exercise3/): Create a div container with a h2 header and a few p elements inside. Style the p elements inside the div container using a descendant selector (div p) to apply different text colors.
- [Exercise 4](../../src/exercises/selector/exercise4/): Place a header (h2) immediately followed by a paragraph (p) and use the adjacent sibling combinator (h2 + p) to style only the first paragraph after the header.
- [Exercise 5](../../src/exercises/selector/exercise5/): Create a list with nested ul elements. Use the child combinator (>) to style only the top-level li items.
- [Exercise 6](../../src/exercises/selector/exercise6/): Add multiple elements (like p, h2, span) within a parent container and use the general sibling combinator (~) to style elements following a certain type.

### Attribute Selectors

- [Exercise 7](../../src/exercises/selector/exercise7/): Create a form with multiple input elements of different types (text, email, password, checkbox). Use attribute selectors to style all inputs of type text (input[type="text"]) with a different background color.
- [Exercise 8](../../src/exercises/selector/exercise8/): Style links based on their href attribute. Make links with href that starts with "http" open in a new tab with a specific icon. Use [href^="http"] to apply styles.
- [Exercise 9](../../src/exercises/selector/exercise9/): Create a set of buttons with data-action attributes (like data-action="save", data-action="delete"). Use attribute selectors to style each button differently based on its data-action value.

### Pseudo-classes

- [Exercise 10](../../src/exercises/selector/exercise10/): Create buttons and style with the :hover and :focus states with different background and text colors.
- [Exercise 11](../../src/exercises/selector/exercise11/): Make a form with multiple input fields. Use the :focus pseudo-class to change the border color of an input when it is focused.
- [Exercise 12](../../src/exercises/selector/exercise12/): Create a table and use :nth-child(even) and :nth-child(odd) to alternate background colors.
- [Exercise 13](../../src/exercises/selector/exercise13/): Add a "Read more" link to a paragraph. Use :visited to change the color of the link after it has been clicked.

### Pseudo-elements

- [Exercise 14](../../src/exercises/selector/exercise14/): Use ::before and ::after pseudo-elements to add decorative content to headings. For instance, add a line or icon before each heading.
- [Exercise 15](../../src/exercises/selector/exercise15/): Create a quote block using blockquote and style it with ::before and ::after to add quotation marks around the text.
- [Exercise 16](../../src/exercises/selector/exercise16/): Add an initial drop cap effect to the first letter of a paragraph using ::first-letter.
- [Exercise 17](../../src/exercises/selector/exercise17/): Highlight text selections using ::selection and apply a different background and text color when text is selected.

### Challenge Exercise: Combined Selectors

- [Exercise 18](../../src/exercises/selector/exercise18/): Create an unordered list where every even list item (li:nth-child(even)) has a different text color. Additionally, apply a hover effect that changes the background color differently when the user hovers over odd and even list item.
- [Exercise 19](../../src/exercises/selector/exercise19/): Style a paragraph where only the **first word** is bold and colored differently. Use combinators and pseudo-classes to style specific words, such as italicizing every **third word** and highlighting words that contain the letter "e".
- [Exercise 20](../../src/exercises/selector/exercise20/): Style a **blockquote** where the **first letter** appears differently. Use combinators and pseudo-classes to style emphasized (`em`) and bold (`strong`) words uniquely. Add a hover effect that changes the background color of the blockquote.
