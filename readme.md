# Mojo CSS Capsule Example

An example showcasing how to create components, use options and add utilities to Mojo CSS using capsules. <br>
This capsule will add a button component and `s-[*]` utilities to your project.

## Usage

#### NPM

1. Install the capsule package via npm:

```bash
npm install @mojocss/capsule-example
```

2. Import the `capsuleExample` function from the installed package:

```javascript
import capsuleExample from "@mojocss/capsule-example";
```

3. Add the capsule to your Mojo config:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [capsuleExample],
});
```

Alternatively, you can configure specific options:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [
    {
      capsule: capsuleExample,
      options: {
        rounded: "full", // Border radius
        px: 6, // Padding left and right
        height: "2.5rem", //  Button Height
        text: 100, // Font size (100 = 1rem)
        textW: 400, // Font weight
      },
    },
  ],
});
```

#### CDN

```html
<script src="https://unpkg.com/@mojocss/capsule-example"></script>
```

and then

```javascript
mojo({
  // Mojo CSS Config
  capsules: [capsuleExample],
});
```

## Button

This is how you use the button:

```html
<button class="m-button"><span>My Button</span></button>
```

Use any color you want:

```html
<button class="m-button bg-c-blue"><span>My Button</span></button>
```

## Square utility

Using this utility you can control both width and height of an element.

```html
<!-- s-6 ==> w-6 h-6 -->
<div class="s-6">...</div>
```

## Related Resources

- [Mojo CSS](https://mojocss.com)
- [Capsules Documentation](https://mojocss.com/docs/config/capsules)
