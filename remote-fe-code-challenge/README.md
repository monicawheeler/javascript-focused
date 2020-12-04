# Remote Front-End Code Challenge - Monica Wheeler

TODO:
- [ ] add tests jest
- [ ] update readme so it's thorough and concise

## Dependencies
TODO: explain these dependencies
```
    "@hookform/resolvers": "^1.0.0",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-hook-form": "^6.9.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^4.0.1",
    "rxjs": "^6.5.5",
    "yup": "^0.29.3"
```

## Handling Styles
It's my personal preference to manage CSS in files separate from the JS. However, I can easily adjust to any method of managing CSS that the team finds most effective.

I lean on SMACSS and BEM methodologies for styling and you will see that echoed through the code challenge.

## Assets
Please note that the profile icon is different than the design. This is because I used a Material UI icon as a placeholder. In a real project, I would either grab the icon from the designs file or some central repo of icons for the project. If I could not locate it or grab it from the designs, I would chat with design to get the SVG.

## Accessibility
With the data table, I am using generic `div` and `span` elements in order to achieve design specifications, then adding aria roles to reintroduce native table accessbility. This will look like a data table to assistive technology while achieving the desired design visuals.

