export default function capsuleExample() {
  /**
   * This file serves as an example of a Mojo CSS capsule.
   * For usage details, refer to: https://mojocss.com/docs/config/capsules
   * This capsule demonstrates the creation of a button component and adds 's-[*]' utilites:
   * Button:
   *   <a class="m-button"><span>My Button</span></a>
   *   <button class="m-button"><span>My Button</span></button>
   *   <div class="m-button bg-c-blue"><span>My Button</span></div>
   * s-[*]:
   * <div class="s-12">...</div> --> w-12 h-12
   * <div class="s-(10px)">...</div> w-(12px) h-(12px)
   */

  /**
   * Default options for the button component.
   * For more details on configuring options, see: https://mojocss.com/docs/config/capsules#options
   */
  let defaultOptions = {
    rounded: "full",
    px: 5,
    height: "2.5rem",
    text: 100,
    textW: 400,
  };

  // Override default options if provided
  let options = { ...defaultOptions, ...this.options };

  /**
   * Define text design for buttons.
   * For configuring text designs, visit: https://mojocss.com/docs/config/capsules#setconfigobject
   */
  this.setConfig({
    base: {
      textDesign: {
        button: {
          fontSize: options.text,
          fontWeight: options.textW,
          lineHeight: 1.5,
        },
      },
    },
  });

  /**
   * Creating the 'm-button' class using a pattern.
   * For adding patterns, see: https://mojocss.com/docs/config/capsules#addpatternsobject
   */
  this.addPatterns({
    ".m-button": {
      idle: `p-relative text-button h-${options.height} d-inline-flex a-items-center gap-2 bg-c-primary text-c-white cursor-pointer ts-200 px-${options.px} py-${options.py} rounded-${options.rounded} outline-none`,
      "hover:after": "opacity-6",
      "focus:before": "opacity-30",
      before: `content-('') bg-c-inherit opacity-0 p-absolute -left-3.5px -top-3px rounded-${options.rounded} w-calc(100%+7px) h-calc(100%+6px) -z-1 ts-150`,
      after: `content-('') bg-c-white opacity-0 p-absolute left-0 top-0 rounded-${options.rounded} w-full h-full ts-150`,
      span: "z-1",
    },
  });

  /**
   * Creating 's-*' utilities for squares.
   * For adding utilities, see: https://mojocss.com/docs/config/capsules#addutilityobject
   */

  this.addUtility({
    name: "s",
    props: ["width", "height"],
  });
}
