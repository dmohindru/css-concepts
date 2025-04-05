Mastering layout techniques is key to building responsive and well-structured designs. Here are some exercises that cover various layout techniques using CSS:

### Flexbox Layout

- [Exercise 1](../../src/exercises/layout-techniques/exercise1/): Create a navigation bar with a logo on the left and navigation links on the right. Use `display: flex` to align items horizontally and `justify-content: space-between` to spread them out.
- [Exercise 2](../../src/exercises/layout-techniques/exercise2/): Make a responsive photo gallery using Flexbox. Create a grid of images that wrap onto multiple rows. Set `flex-wrap: wrap` and use `justify-content: center` to keep the gallery centered.
- [Exercise 3](../../src/exercises/layout-techniques/exercise3/): Build a "card" layout where each card has a title, an image, and a description. Use Flexbox to center the text vertically inside the card and align it with the image.
- [Exercise 4](../../src/exercises/layout-techniques/exercise4/): Create a multi-column layout with three boxes aligned horizontally. Set one box to grow (`flex-grow: 1`) while the others have a fixed width.
- [Exercise 5](../../src/exercises/layout-techniques/exercise5/): Make a responsive footer with three sections (e.g., contact info, links, social media). Use Flexbox to display them in a single row on large screens and stack them vertically on small screens.

### Grid Layout

- [Exercise 6](../../src/exercises/layout-techniques/exercise6/): Create a 3x3 grid layout for a tic-tac-toe board. Use CSS Grid to make each cell equal-sized and center-aligned.
- [Exercise 7](../../src/exercises/layout-techniques/exercise7/): Build a basic dashboard with a header, sidebar, main content area, and footer. Use Grid to divide the layout into sections, with the sidebar taking up a single column and the main content area spanning multiple columns.
- [Exercise 8](../../src/exercises/layout-techniques/exercise8/): Make a responsive grid of "cards" where each row displays three cards on larger screens and one card on small screens. Use media queries with Grid's `grid-template-columns` to adjust the number of columns.
- [Exercise 9](../../src/exercises/layout-techniques/exercise9/): Create a simple pricing table with three pricing tiers. Use CSS Grid to arrange each tier's features vertically, then make each tier align in a single row at the top level.
- [Exercise 10](../../src/exercises/layout-techniques/exercise10/): Build a magazine-style layout with a large featured article and several smaller articles around it. Use Grid areas to place elements precisely.

### Positioning (Relative, Absolute, Fixed, and Sticky)

- [Exercise 11](../../src/exercises/layout-techniques/exercise11/): Create a sidebar that sticks to the side of the viewport as the user scrolls. Use `position: sticky` to keep it visible within the scrolling section.
- [Exercise 12](../../src/exercises/layout-techniques/exercise12/): Make a banner that stays fixed at the top of the page as the user scrolls. Use `position: fixed` and set a high `z-index` to ensure it stays above other content.
- [Exercise 13](../../src/exercises/layout-techniques/exercise13/): Place an icon in the bottom-right corner of a card using `position: absolute`. Make sure the card container has `position: relative` so the icon is positioned relative to the card.
- [Exercise 14](../../src/exercises/layout-techniques/exercise14/): Build a "tooltip" effect. When the user hovers over a button, display a small box (the tooltip) with additional information above the button. Use `position: absolute` for the tooltip.

### Responsive Design

- [Exercise 15](../../src/exercises/layout-techniques/exercise15/): Create a responsive navigation menu that changes from a horizontal layout to a vertical layout on smaller screens. Use Flexbox or Grid along with media queries to adjust the layout based on screen width.
- [Exercise 16](../../src/exercises/layout-techniques/exercise16/): Design a simple, two-column layout (content and sidebar). On larger screens, display the sidebar next to the content; on smaller screens, stack the sidebar below the content.
- [Exercise 17](../../src/exercises/layout-techniques/exercise17/): Make a responsive image grid that automatically changes the number of columns based on screen size. Use CSS Grid’s `auto-fill` or `auto-fit` properties with `minmax`.
- [Exercise 18](../../src/exercises/layout-techniques/exercise18/): Create a flexible hero section with a large background image, text overlay, and a call-to-action button. Use `vw`, `vh`, and media queries to make it look good on various screen sizes.

### Multi-column Layout

- [Exercise 19](../../src/exercises/layout-techniques/exercise19/): Use the CSS `columns` property to create a multi-column text layout, such as a newspaper-style article. Experiment with `column-count` and `column-gap` for styling.
- [Exercise 20](../../src/exercises/layout-techniques/exercise20/): Create a simple layout for displaying reviews in a two-column format, where the text wraps into two columns. Use `column-width` to control column behavior on different screen sizes.

These exercises cover a wide range of layout techniques, from Flexbox and Grid to responsive and multi-column layouts. Let me know if you need help with any specific exercise or further clarification on a technique!
