# React Bootstrap

[Click to view the document](https://react-bootstrap.netlify.app/docs/getting-started/introduction) <br>
[Click to see React Bootstrap Components](https://react-bootstrap.netlify.app/docs/components/accordion)
[Click to see React Bootstrap Components](https://react-bootstrap.netlify.app/docs/layout/grid)

PROJECT LIVE LINK : https://nbalegend-app.netlify.app

React Bootstrap is an integration kit that enables Bootstrap, a popular UI (User Interface) component library, to be used in React applications.

React-Bootstrap is a complete re-implementation of Bootstrap components using React. It has no dependency on Bootstrap.js or jQuery. If you have React installed and React-Bootstrap installed, you have everything you need.

Methods and events using jsDom or jQuery are necessarily made by manipulating the DOM directly. In contrast, React uses state updates to update the virtual DOM. In this way, React-Bootstrap provides a more reliable solution by incorporating Bootstrap functionality into React's virtual DOM.

To use React Bootstrap, you need to add the relevant package to your React application and use the components according to the documentation. After adding React Bootstrap to your project's dependencies, you can add any design you want to your app using the components provided in the examples or documentation.

- Component-Based Building: React is a component-based JavaScript library. React Bootstrap is built on top of this component-based build. Components represent different parts in your UI and provide reusability. React Bootstrap allows you to integrate Bootstrap components as React components into your applications. For example, a Button component can be easily created and used with React Bootstrap.

- Making Bootstrap Components React Compatible: Bootstrap is a popular UI framework and includes many useful components. However, Bootstrap in its original form cannot be used directly in React projects. React Bootstrap makes Bootstrap components React compatible and allows you to take advantage of these components' React components. For example, you can create dynamic and interactive components using state management in React components.

- Documentation and Examples: React Bootstrap provides extensive documentation and examples to enable users to get started with their projects easily. The documentation explains how to install React Bootstrap, the features of the components to use, and how to use them. The examples show typical usage scenarios and can be used as a starting point. This way, it becomes easier to integrate React Bootstrap into your project and use components correctly.

- Responsive Design: One of the main features of Bootstrap is that it supports responsive design. This feature allows your app to be displayed harmoniously on different devices and screen sizes. React Bootstrap preserves the responsive features of Bootstrap and helps you create a responsive UI even when used with React components.

- Easy Customization: In addition to using Bootstrap components, React Bootstrap also allows you to customize these components. You can easily change the look and behavior of components with Bootstrap's CSS classes and customization options. Also, thanks to React's features, you can programmatically manage the state and behavior of components.

React Bootstrap combines React and Bootstrap to provide a powerful user interface building experience. React's component-based nature makes Bootstrap components more modular and allows you to create a more interactive and dynamic user interface using React's powerful features.

## How add to your project ?
```javascript
npm install react-bootstrap bootstrap
or
yarn add react-bootstrap bootstrap


// The following line can be included in your src/index.js or App.js file

import 'bootstrap/dist/css/bootstrap.min.css';
```

Now that we have added it to our project, we can start using both bootstrap features and react-bootstrap features.

For example; Let's say you want to create a button element. First of all, we import the React-Bootstrapten `Button` component on our related page.
```jsx
import Button from 'react-bootstrap/Button';
...
```
After that, we can now call and use the Button component in the same page.
```jsx
import Button from 'react-bootstrap/Button';

function MyButtonComp() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default MyButtonComp;

```
The button component contains the features of the html button element. At the same time, it contains the css features of the `btn` class. With the logic of React props, we can add additional features to the `Button` component. The props names that React-Bootstrap components will take are fixed. We can learn these from the document ([Click for button example](https://react-bootstrap.netlify.app/docs/components/buttons#api)) or we can open react-bootstrapi from the node_modules folder and look at the relevant component (I recommend you to review the document) .

### Examples of the Responsive Grid structure:

##### Responsive Setting with Col
Col lets you specify column widths in 6 breakpoints sizes (xs, sm, md, lg, xl and xxl). For each breakpoints, you can specify the amount of columns to span. you give.)
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={8} md={6} lg={4}>sm=8-md=6-lg=4</Col>
        <Col sm={8} md={6} lg={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;
```

##### Adjusting the Responsive with Adjusting Col Widths in Row

Row lets you specify column widths in 6 breakpoints sizes (xs, sm, md, lg, xl and xxl). For each breakpoints, you can specify the amount of columns that will fit side by side. (You give the size according to the number you want to display in the row. For example, show 2 per row on xs screens, show 4 on md screens, and 6 on lg screens.)
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutExample() {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutExample;
```

##### Default 6 Breakpoints

| Breakpoint           | Class infix | Dimensions |
|----------------------|-------------|------------|
| X-Small              | xs          | <576px     |
| Small                | sm          | ≥576px     |
| Medium               | md          | ≥768px     |
| Large                | lg          | ≥992px     |
| Extra large          | xl          | ≥1200px    |
| Extra extra large    | xxl         | ≥1400px    |


## Nba Legends

### [filter ](./src/components/CardContainer.jsx)

- According to the data entered into the input, the data displayed on the screen should change. Where do we print the data on the screen? Inside the CardContainer. Then we can create the input in a card container.

- Here, in our biizm example, the filtering process is done according to the name information of the players. So how do we go about filtering by name?
- Let's remember String methods. Which of these methods was checking to see if it contains the characters we gave it? includes() method. If the data written in this method contains the string we are querying, it returns true, otherwise it returns false.

```javascript
  "araba".includes("a") => true
  "araba".includes("ar") => true
  "araba".includes("ara") => true
  "araba".includes("m") => false
```
- Here, there will be string name information that we will query in the filtering process. If the name information contains the data written in the input, it will have filtered the data accordingly. And this should happen every time the user makes changes to the input.
- Therefore, what we need first is the data from the input. How do we capture data instantly from the input? We can catch the changes instantly with the onChange event. We captured the data in onChange, but we need something to detect every change and reflect it on the screen, but what is it? Of course the useState hook. The useState hook is a hook that monitors reactta state changes and re-render the component according to that change.
``jsx
  const [search,setSearch] = useState("");

  ...

  return (
    <>
      <input type="search" onChange={(e)=> setSearch(e.target.value)}>
    </input>
  )
```
- Then if we transfer the data from the input to the state, we will render the component in every change. Since the filteredData will be recreated every time the component is rendered, that is, it will be redefined, we can easily provide the change on the screen.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```


### [Changing Card Displayed Data](./src/components/PlayerCard.jsx)

- What is expected from us is that when each card is clicked, there will be a change in that card. In our example, the statistic information is displayed on the card instead of the picture, or vice versa.
- And every time it is clicked, the corresponding card needs to be re-rendered. To do this in React, we need the useState hook. And since only the clicked card has to change and the change remains constant until that card is clicked again, each card must have its own state.
- When we map the data so that each card has a state, if we return a component for each data, we can create the states of each card in that component. Because the higher the number of data, the more components we will have created, so the states we create in that component will be defined separately for each data in the functions. In this way, we will be able to create a situation for each card. Otherwise, if we press the screen where we map the data, we will have a single state, so no matter which card we click on, all of them will change.

- For this reason, we will map the data in the parent component and send the PlayerCard component, which is the sub-component for each data, to it via props.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```

- Now it's time to create statuses for each card. How do we create a situation here? When you click on the card, the text will come, when you click it again, the pictures will come. We need useState to track this change. And we need the onClick event to make the change.

```jsx
  const [showImg,setShowImg] = useState(true)
```

- Since the related component will be rendered as the state changes, we can create a mechanism according to this state. This mechanism is called reactta **conditional rendering** . We can do this in JSX with [ternary operator](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--). So if the showImg state is true, the image will be shown, if false, the statistics will be shown. So how will the change happen? So what should happen when it clicks. And where do we define the click event? Clicking on the image will show the false image, clicking on the texts showImage will be true. So, instead of defining onClick separately, can we define it from one place and the same click will work when both image and text are present and reverse the showImage state? Of course we can translate. If we give the onClick event to the container and take advantage of the `not !` operator in onClick, we can finish this process in one move. So when we say `setShowImage(!showImage)` it will do false if true and true if false.

```jsx
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleToggle = () => setShowImage(!showImage);
  return (
    <Card className="player-card" onClick={handleToggle} role="button">
      {showImage ? (
        <Card.Img variant="top" src={img} height={"350px"} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start list-unstyled">
                🏀 {item}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
```
