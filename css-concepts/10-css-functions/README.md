Here are some exercises to help you practice CSS functions. These exercises cover layout, spacing, color manipulation, responsive design, and advanced effects using CSS functions.

### Using `calc()` for Layout and Spacing

- [Exercise 1](../../src/exercises/css-functions/exercise1/): Create a two-column layout with a sidebar and main content area. Set the sidebar width to `200px` and the main content width using `calc(100% - 200px)`. Adjust the layout by changing the sidebar width and using `calc()` to maintain balance.
- [Exercise 2](../../src/exercises/css-functions/exercise2/): Design a responsive card component where the padding is calculated as `calc(1rem + 1vw)`. Observe how the padding scales with the viewport width.
- [Exercise 3](../../src/exercises/css-functions/exercise3/): Create a sticky header that occupies 10% of the viewport height and set the main content’s top margin using `calc(100vh - 10vh)`. Adjust the header height to see how `calc()` helps maintain proper layout.

### Color Manipulation with `rgba()` and `hsl()`

- [Exercise 4](../../src/exercises/css-functions/exercise4/): Design a button with a background color using `rgba()`. Make it semi-transparent with `rgba(0, 123, 255, 0.5)`. Change the alpha (opacity) value on hover to make it fully opaque.
- [Exercise 5](../../src/exercises/css-functions/exercise5/): Use `hsl()` to set the background color of multiple elements (like boxes or cards) with the same hue but varying saturation and lightness. Create a gradient-like effect by adjusting the saturation and lightness values for each element.

### Combining `min()`, `max()`, and `clamp()` for Responsive Sizing

- [Exercise 6](../../src/exercises/css-functions/exercise6/): Create a heading element that changes size responsively using `clamp()`, e.g., `clamp(1.5rem, 2vw + 1rem, 3rem)`. Observe how the heading resizes between the minimum and maximum values based on the viewport width.
- [Exercise 7](../../src/exercises/css-functions/exercise7/): Set the width of a container using `min(90%, 500px)`. The container should occupy 90% of the viewport width but max out at 500px. Test the responsiveness by resizing the viewport.
- [Exercise 8](../../src/exercises/css-functions/exercise8/): Use `max()` to set a minimum padding for a container, e.g., `max(10px, 2vw)`, to ensure consistent spacing on both mobile and desktop views.

### Using `url()` for Backgrounds and Icons

- [Exercise 9](../../src/exercises/css-functions/exercise9/): Use `url()` to set a background image on a full-screen hero section. Adjust the background properties to achieve a visually appealing layout.
- [Exercise 10](../../src/exercises/css-functions/exercise10/): Create a series of cards with `url()`-based icons as backgrounds in each card header. Use different URLs to load various icons for each card header background.

### Using Transform Functions for Animation and Effects

- [Exercise 11](../../src/exercises/css-functions/exercise11/): Create a rotating effect on an image or icon using `transform: rotate(45deg);`. Use hover to trigger the rotation to see how the element changes when interacted with.
- [Exercise 12](../../src/exercises/css-functions/exercise12/): Design a button that scales up slightly on hover using `transform: scale(1.1);`. Experiment with different scale values to see how they impact the hover effect.

### Gradients with `linear-gradient()` and `radial-gradient()`

- [Exercise 13](../../src/exercises/css-functions/exercise13/): Create a gradient background using `linear-gradient()` for a hero section. Experiment with different angles and color stops to achieve a smooth transition effect.
- [Exercise 14](../../src/exercises/css-functions/exercise14/): Design a button with a gradient background using `linear-gradient()`, and change the gradient direction on hover. Try using multiple color stops for a more complex gradient effect.
- [Exercise 15](../../src/exercises/css-functions/exercise15/): Use `radial-gradient()` to create a circular gradient background for a div. Experiment with the gradient’s shape and size to achieve a spotlight effect.

### Shadows with `box-shadow()` and `drop-shadow()`

- [Exercise 16](../../src/exercises/css-functions/exercise16/): Apply `box-shadow()` to a card component to create a soft shadow effect. Adjust the offset, blur, and spread values to achieve a realistic shadow.
- [Exercise 17](../../src/exercises/css-functions/exercise17/): Create a button with a `box-shadow` that changes on hover to give it a lifted look. Increase the shadow spread and blur for the hover state.

### Combining Functions for Dynamic Effects

- [Exercise 18](../../src/exercises/css-functions/exercise18/): Create a responsive text element where the font size is calculated with `clamp()` and the color is set using `hsl()` with variables for hue, saturation, and lightness. Adjust these variables to dynamically style the text.
- [Exercise 19](../../src/exercises/css-functions/exercise19/): Build a card layout where each card background uses a `linear-gradient()` mixed with a semi-transparent color using `rgba()`. Apply a `box-shadow()` with a color calculated from the card’s gradient.
- [Exercise 20](../../src/exercises/css-functions/exercise20/): Make an animated loader where each dot uses `transform: scale()` with `calc()` for its size and changes color with `hsl()` to create a pulsing effect.
