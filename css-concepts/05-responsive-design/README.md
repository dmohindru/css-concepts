Here are some practical exercises to help you understand and master responsive design in CSS. Each exercise targets different aspects of responsive design, from breakpoints and fluid layouts to responsive typography and advanced layout techniques.

### Basic Breakpoints with Media Queries

- [Exercise 1](../../src/exercises/responsive/exercise1/): Create a simple webpage with a header, content section, and footer. Use media queries to change the layout:
  - Display them in a single column on screens smaller than 600px.
  - Switch to a two-column layout for screens between 600px and 900px.
  - Use a three-column layout for screens larger than 900px.
- [Exercise 2](../../src/exercises/responsive/exercise2/): Design a navigation menu that changes layout based on screen size:
  - Show all menu items in a row on large screens.
  - Switch to a vertical list on smaller screens.
  - Add a “hamburger” menu icon on screens below 600px that expands the menu when clicked.

### Fluid Layouts with Percentages

- [Exercise 3](../../src/exercises/responsive/exercise3/): Create a grid of image cards with three images per row on large screens. Use percentages for width and height to:
  - Show only two images per row on medium screens.
  - Show a single image per row on small screens.
- [Exercise 4](../../src/exercises/responsive/exercise4/): Build a full-width responsive header. Set the header to use 100% of the viewport width. Add padding or margins using percentages to maintain proportionate spacing on different screen sizes.

### Responsive Typography with Viewport Units

- [Exercise 5](../../src/exercises/responsive/exercise5/): Design a hero section with a large headline that scales with the viewport. Use `vw` units for the font-size of the headline and observe how it changes across screen sizes.
- [Exercise 6](../../src/exercises/responsive/exercise6/): Create a paragraph and set its font size using `clamp()` to ensure it scales but remains within a readable range. For example, use `font-size: clamp(1rem, 2vw, 2rem);` and test it on different screen sizes.

### Flexible Images and Media

- [Exercise 7](../../src/exercises/responsive/exercise7/): Create a gallery of images and make each image responsive:
  - Set `max-width: 100%` on each image to prevent it from overflowing.
  - Use media queries to adjust the image layout (e.g., two columns on tablets, one column on mobile).
- [Exercise 8](../../src/exercises/responsive/exercise8/): Embed a YouTube video or other media item in an iframe and make it responsive. Use a container with a percentage-based padding (e.g., `padding-top: 56.25%` for a 16:9 aspect ratio) to ensure the iframe scales with the screen size.

### CSS Flexbox for Responsive Layouts

- [Exercise 9](../../src/exercises/responsive/exercise9/): Design a responsive card layout using Flexbox:
  - Create three cards in a row on larger screens.
  - Wrap the cards into two columns on medium screens.
  - Stack them in a single column on small screens.
- [Exercise 10](../../src/exercises/responsive/exercise10/): Build a responsive footer using Flexbox with three sections:
  - Show all sections in a single row on larger screens.
  - Stack sections vertically on smaller screens (below 600px).

### CSS Grid for Advanced Layouts

- [Exercise 11](../../src/exercises/responsive/exercise11/): Design a responsive portfolio grid with CSS Grid:
  - Use a three-column layout on large screens, two columns on tablets, and a single column on mobile.
  - Ensure each portfolio item is sized proportionally and fits within the grid without breaking the layout.
- [Exercise 12](../../src/exercises/responsive/exercise12/): Build a responsive sidebar layout with CSS Grid:
  - Display the sidebar and main content side-by-side on larger screens.
  - Stack the sidebar above the main content on smaller screens (below 768px).

### Viewport Meta Tag and Mobile First Design

- [Exercise 13](../../src/exercises/responsive/exercise13/): Create a basic HTML page and add the viewport meta tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Check how the page responds on mobile without and with this tag.
- [Exercise 14](../../src/exercises/responsive/exercise14/): Redesign a webpage with a “mobile-first” approach. Start by styling for small screens (e.g., `max-width: 600px`) and gradually add media queries for larger screens, rather than scaling down a large layout.

### Responsive Units: REM, EM, and VW

- [Exercise 15](../../src/exercises/responsive/exercise15/): Create a header with a title and subtitle. Use `em` units for the title's font-size and `rem` units for the subtitle. Resize the parent font size to see how both `em` and `rem` units respond differently.
- [Exercise 16](../../src/exercises/responsive/exercise16/): Build a responsive button that scales with viewport size using `vw` units. Test the button’s size on different screen sizes to see how the button adapts to the viewport.

### Responsive Forms

- [Exercise 17](../../src/exercises/responsive/exercise17/): Design a form with labels, input fields, and a submit button. Use Flexbox or CSS Grid to:
  - Align the labels and inputs in a two-column layout on larger screens.
  - Stack them vertically on smaller screens (below 600px).
- [Exercise 18](../../src/exercises/responsive/exercise18/): Create a multi-step form where each step appears as a card. Display multiple steps side-by-side on large screens but stack them vertically on small screens.

### Creating a Responsive Navigation Bar

- [Exercise 19](../../src/exercises/responsive/exercise19/): Build a horizontal navigation bar for larger screens and convert it into a vertical dropdown or “hamburger” menu on smaller screens using media queries.
- [Exercise 20](../../src/exercises/responsive/exercise20/): Add hover and click effects to the navigation links for both the desktop and mobile versions. Ensure that the menu is easy to use on touch screens.
