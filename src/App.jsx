import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MessageInner } from "./screens/MessageInner";
import { Notification } from "./screens/Notification";
import { Bookshelf } from "./screens/Bookshelf";
import { Message } from "./screens/Message";
import { Profile } from "./screens/Profile";
import { NotificationScreen } from "./screens/NotificationScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { MessageInnerScreen } from "./screens/MessageInnerScreen";
import { Screen8 } from "./screens/Screen8";
import { Upload } from "./screens/Upload";
import { Edit } from "./screens/Edit";
import { UploadScreen } from "./screens/UploadScreen";
import { BookshelfScreen } from "./screens/BookshelfScreen";
import { Screen13 } from "./screens/Screen13";
import { Login } from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MessageInner />,
  },
  {
    path: "/messageu95inner-1",
    element: <MessageInner />,
  },
  {
    path: "/notification-1",
    element: <Notification />,
  },
  {
    path: "/bookshelf-1",
    element: <Bookshelf />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/notification-2",
    element: <NotificationScreen />,
  },
  {
    path: "/notification-3",
    element: <DivWrapper />,
  },
  {
    path: "/messageu95inner-2",
    element: <MessageInnerScreen />,
  },
  {
    path: "/notification-4",
    element: <Screen8 />,
  },
  {
    path: "/upload-1",
    element: <Upload />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/upload-2",
    element: <UploadScreen />,
  },
  {
    path: "/bookshelf-2",
    element: <BookshelfScreen />,
  },
  {
    path: "/bookshelf-3",
    element: <Screen13 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
