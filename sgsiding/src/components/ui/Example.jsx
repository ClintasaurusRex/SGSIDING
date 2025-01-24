import React from "react";

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Little Butthole",
    email: "Little Butthole@example.com",
    image:
      "https://plus.unsplash.com/premium_photo-1664355810959-7b6e101bf78c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ExampleList({ person }) {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <ExampleItem
          key={person.email}
          person={person}
        />
      ))}
    </ul>
  );
}

function ExampleItem({ person }) {
  return (
    <li
      key={person.email}
      className="py-4 flex"
    >
      <img
        className="size-10 rounded-full"
        src={person.image}
        alt=""
      />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500">{person.email}</p>
      </div>
    </li>
  );
}
