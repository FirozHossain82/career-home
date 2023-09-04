import React from "react";

const Blog = () => {
  return (
    <div className=" ">
        <h1 className="text-center text-4xl font-semibold font-serif text-orange-500 mt-8">This is React Router Dom Blog.</h1>
      <div className="py-16">
        <div className="w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl  rounded-md">
          <div className="  p-10">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600  font-serif">
              What is the purpose of react routers?
            </h2>
            <p className="text-gray-900 font-medium text-justify ">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.They allow your user to move between the
              components of your app while preserving user state, and can
              provide unique URLs for these components to make them more
              shareable
            </p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl  rounded-md">
          <div className="  p-10">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600  font-serif">
              When Should You Use Context Api ?
            </h2>
            <p className="text-gray-900 font-medium text-justify ">
              App-Wide State: When you have data that many components in your
              application need to access or modify, using Context can help avoid
              prop drilling, where you pass data through multiple levels of
              components.Theme or User Preferences: Context is useful for
              managing themes, user preferences, and other global settings that
              affect the overall look and behavior of your app.Authentication:
              Storing user authentication status and user data can be done with
              Context to make it accessible to different parts of your
              application.Language or Localization: If your app supports
              multiple languages or requires localization, Context can help
              manage language preferences and translations.
            </p>
          </div>
        </div>

        <div className="w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl rounded-md">
          <div className=" p-10">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-rose-600">
              How does context API works?
            </h2>
            <p className="text-gray-900 font-medium text-justify ">
              The Context API in React allows you to create and manage global
              state or data that can be shared across multiple components in
              your application. It works by providing a way to create a
              "context" object that holds the shared data, and then components
              can "subscribe" to this context to access and update the data
              without the need for explicit prop drilling. This makes it easier
              to maintain and pass data between components, promoting better
              code organization and reusability in your React application.
            </p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl rounded-md">
          <div className=" p-10">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-rose-600">
              What is Custom Hooks?
            </h2>
            <p className="text-gray-900 font-medium text-justify ">
              Custom hooks in React are reusable JavaScript functions that
              encapsulate and manage complex state logic, side effects, or any
              other functionality, making it easier to share and reuse this
              logic across different components in your application. These hooks
              follow the "use" naming convention and allow you to abstract away
              common patterns and reduce code duplication, leading to cleaner,
              more maintainable React code. Custom hooks can be used to separate
              concerns and improve code organization, promoting modularity and
              reusability in your React applications.
            </p>
          </div>
        </div>

        <div className=" w-9/12 mx-auto bg-indigo-300 shadow-xl rounded-md">
          <div className=" p-10">
            <h2 className="text-2xl font-semibold mb-4 text-rose-600  font-serif">
              What is the UesRef?
            </h2>
            <p className="text-gray-900 font-medium text-justify ">
              useRef is a React Hook that provides a way to create and manage
              mutable references to DOM elements and other values. Unlike state
              variables, changes to useRef do not trigger component re-renders,
              making it useful for tasks like direct DOM manipulation, holding
              values that shouldn't affect rendering, and persisting values
              across renders without causing side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
