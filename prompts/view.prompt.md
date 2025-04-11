i# Clean Architecture in Frontend Applications: View

This article explains the concept and implementation of the view unit in frontend applications within the Clean Architecture paradigm.

Example repository: https://github.com/harunou/react-tanstack-react-query-clean-architecture

## Overview

The view unit is typically a layout. In React components, the layout is represented with JSX. The view's role is to present application data to users and handle user input. The view is tightly coupled with presenter and controller interfaces, which define the data and event handlers required by the view.

## View Structure & Dependencies

The view depends on presenter and controller through their interfaces. The controller and presenter implement these interfaces and depend on the application core. They may also depend on props or the component's local state when needed.

### Data & Control Flow

- **Data flow**: Adapted data flows from the presenter into the view
- **Control flow**: The controller handles user events captured by the view

## View Implementation Process

View implementation starts with visual design, which is translated into a layout. The development context is limited to visual representation concerns: layout structure, styles, animations, design system, component library, accessibility, etc.

The implementation produces three elements:
1. Component layout
2. Controller interface
3. Presenter interface (when necessary)

### Step-by-Step Example

Start with empty interfaces and component:

```tsx
interface Presenter {
}
interface Controller {
}
export const Order: FC = () => {
  const presenter: Presenter = {};
  const controller: Controller = {};
  return null;
};
```

Gradually build the layout and fill interfaces with properties:

```tsx
interface Presenter {
  hasOrder: boolean;
  orderDate: string;
  userName: string;
}
interface Controller {
  deleteOrderButtonClicked: () => void;
}
export const Order: FC = () => {
  // presenter implementation with mock data
  const presenter: Presenter = {
    hasOrder: true,
    orderDate: "09-03-2025",
    userName: "John Doe",
  };
  // controller implementation with mock data
  const controller: Controller = {
    deleteOrderButtonClicked: () => {},
  };
  if (!presenter.hasOrder) {
    return null;
  }
  return (
    <div style={{ border: "1px solid red" }}>
      <button onClick={controller.deleteOrderButtonClicked}>
        Delete Order
      </button>
      <div>Date: {presenter.orderDate}</div>
      <div>User name: {presenter.userName}</div>
    </div>
  );
};
```

### Property Naming Conventions

- **Presenter properties**: Named to reflect the data to be presented
- **Controller properties**: Named based on events, clearly reflecting actions to be handled

## Data & Event Handler Approaches

There are two main approaches:

1. **Through props**: Component receives data and handlers as props from a parent
2. **Through presenter and controller implementations**: Component receives data and handlers from dedicated implementations

Small components typically receive data through props. As components grow, props may evolve into presenter and controller. Later, large components can be split into smaller ones, restarting the evolution cycle.

## Testing the View

1. **Manual testing**: The view can be rendered in a browser with mock data
2. **Unit testing**: Create tests with mocked controller and presenter interfaces

## Common Questions

### Do I need to create presenter and controller interfaces for every component?

No, it depends on the component's complexity. If the view is simple and its values and handlers are easily understood, interfaces may be omitted.

### Understanding Null Interfaces

When a view does not have declared interfaces but still has data or events to handle, these are called "null presenter" or "null controller" interfaces.

Example with null presenter interface:

```tsx
export const Order: FC = () => {
  // constants represent null presenter interface implementation
  const hasOrder = true;
  const orderDate = "09-03-2025";
  const userName = "John Doe";
  if (!hasOrder) {
    return null;
  }
  return (
    <div style={{ padding: "5px" }}>
      <div>Date: {orderDate}</div>
      <div>User name: {userName}</div>
    </div>
  );
};
```

### Where to place presenter and controller interfaces?

Options:
1. **Same file as the component**: If implemented within that file
2. **Separate file**: If implemented elsewhere

### How interfaces improve component design

Following the Interface Segregation Principle (ISP), large interfaces suggest the layout might be too big and can be split into smaller, more specific components.

### Organizing Props

Props can be divided into:
- **Operands**: Data the component needs (from presenter/controller)
- **Options**: Configuration affecting component behavior

Example switching from presenter implementation to props:

```tsx
// Before: Using presenter implementation
type OrderProps = {
  orderId: string;
  presentationType: "full" | "limited";
};
interface Presenter {
  hasOrder: boolean;
  orderDate: string;
  userName: string;
}

// After: Using props directly
type OrderProps = {
  orderDate: string;
  userName: string;
  presentationType: "full" | "limited";
};
```

## Conclusion

The view unit is the boundary between users and the system. When developing views:
1. Focus on layout and interfaces that reflect actual needs
2. Let component complexity guide whether to use explicit interfaces
3. Choose consumption approach (props vs. implementations) based on the specific context
4. Remember that switching between approaches involves limited changes
