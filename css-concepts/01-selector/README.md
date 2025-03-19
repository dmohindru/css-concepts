Practicing selectors will build a solid foundation for targeting elements efficiently in your CSS. Here are some exercises to get you started with each type of selector:

1. Basic Selectors
   [Exercise 1](../../src/exercises/selector/exercise1/): Create three div elements with class names box, circle, and triangle. Use element selectors (div), class selectors (.box, .circle, .triangle), and ID selectors to style each element differently.
   [Exercise 2](../../src/exercises/selector/exercise2/): Make a simple list with multiple li elements. Use a class selector to style specific items (e.g., make every item with the class highlight have a yellow background).

2. Combinator
   [Exercise 3](../../src/exercises/selector/exercise3/): Create a div container with a h2 header and a few p elements inside. Style the p elements inside the div container using a descendant selector (div p) to apply different text colors.
   [Exercise 4](../../src/exercises/selector/exercise4/): Place a header (h2) immediately followed by a paragraph (p) and use the adjacent sibling combinator (h2 + p) to style only the first paragraph after the header.
   [Exercise 5](../../src/exercises/selector/exercise5/): Create a list with nested ul elements. Use the child combinator (>) to style only the top-level li items.
   [Exercise 6](../../src/exercises/selector/exercise6/): Add multiple elements (like p, h2, span) within a parent container and use the general sibling combinator (~) to style elements following a certain type.

3. Attribute Selectors
   [Exercise 7](../../src/exercises/selector/exercise7/): Create a form with multiple input elements of different types (text, email, password, checkbox). Use attribute selectors to style all inputs of type text (input[type="text"]) with a different background color.
   [Exercise 8](../../src/exercises/selector/exercise8/): Style links based on their href attribute. Make links with href that starts with "http" open in a new tab with a specific icon. Use [href^="http"] to apply styles.
   [Exercise 9](../../src/exercises/selector/exercise9/): Create a set of buttons with data-action attributes (like data-action="save", data-action="delete"). Use attribute selectors to style each button differently based on its data-action value.

4. Pseudo-classes
   [Exercise 10](../../src/exercises/selector/exercise10/): Create a navigation menu with links and style the :hover and :focus states with different background and text colors.
   [Exercise 11](../../src/exercises/selector/exercise11/): Make a form with multiple input fields. Use the :focus pseudo-class to change the border color of an input when it is focused.
   [Exercise 12](../../src/exercises/selector/exercise12/): Create a grid or list of items, and use :nth-child(even) and :nth-child(odd) to alternate background colors.
   [Exercise 13](../../src/exercises/selector/exercise13/): Add a "Read more" link to a paragraph. Use :visited to change the color of the link after it has been clicked.

5. Pseudo-elements
   Exercise 14: Use ::before and ::after pseudo-elements to add decorative content to headings. For instance, add a line or icon before each heading.
   Exercise 15: Create a quote block using <blockquote> and style it with ::before and ::after to add quotation marks around the text.
   Exercise 16: Add an initial drop cap effect to the first letter of a paragraph using ::first-letter.
   Exercise 17: Highlight text selections using ::selection and apply a different background and text color when text is selected.

6. Challenge Exercise: Combined Selectors
   Exercise 18: Create a table with alternating row colors, but style only the even rows in a specific column. For example, use the following selector: table tr:nth-child(even) td:nth-child(2) to style only the cells in the second column for even rows.
   Exercise 19: Build a simple card layout with different sections inside each card. Use combinators and pseudo-classes to style only the first card and apply different styles to sections within it.
   Exercise 20: Create a form with multiple sections, each containing several input fields. Use a combination of pseudo-classes and attribute selectors to style various input types based on focus, checked state, or required attribute (e.g., input:required or input:checked).
