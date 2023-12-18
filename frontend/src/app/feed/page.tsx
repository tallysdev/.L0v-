import { UserCarousel } from "./components/userCarousel";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  gender: string;
  bio?: string | null;
  photos?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const users: User[] = [
  {
    id: "062f65e6-279e-4300-9b70-c33b8efc892e",
    username: "feio",
    email: "teste@gmail.com",
    password: "$2b$12$0TQ8Vxx/nVc3s5upOmfcZux3aVWqkv4U.Q8pjhVZO6GT77ec1FfEq",
    birthdate: new Date("1990-01-01T12:30:00.000Z"),
    gender: "Male",
    bio: "This is a short bio.",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "22af8d14-dc86-435c-b5b9-32be81f03b95",
    username: "testando",
    email: "testando@gmail.com",
    password: "$2b$12$N84vpRFyevtSZJe58huOPu1Qvj2JtFlXiRnENvCJNbEzmAE/o22p.",
    birthdate: new Date("1995-05-05T12:30:00.000Z"),
    gender: "Male",
    bio: "Short bio",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "256244ff-38d2-4252-b979-ca740d098f29",
    username: "render",
    email: "render@gmail.com",
    password: "$2b$12$wJYRfo622eqe.BaF3I277ORkcIsSPOnyejjvRszXPnHhr.vyBu5XK",
    birthdate: new Date("1988-10-10T12:30:00.000Z"),
    gender: "Male",
    bio: "This is a short bio.",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "364a15ed-1362-43df-aa5e-135c2e0cabc1",
    username: "frabricio",
    email: "fabricio@gmail.com",
    password: "$2b$12$FWe1MQrPgXaUsj4CYu5mmed.f9b./tJNEVybAPlGqQR6LtrKGPgIy",
    birthdate: new Date("1993-02-15T12:30:00.000Z"),
    gender: "Male",
    bio: "Short bio",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4806e2db-b4e8-4000-8e9c-6a0a21950ee9",
    username: "tallys",
    email: "tallys@gmail.com",
    password: "$2b$12$xCetYEAaqZOAj4nYT7s8M.OueSXlop7RkCcxoQU6Fv/ZW37ECUYRO",
    birthdate: new Date("1987-12-03T12:30:00.000Z"),
    gender: "Male",
    bio: "This is a short bio.",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7a302f99-214e-4389-a90b-91461cd4a3ce",
    username: "novo",
    email: "novo@gmail.com",
    password: "$2b$12$zAD6e3AWs4mgx1CWv/FInuGknof6ZsUk6uc4ciuw2reSix4Ba4do2",
    birthdate: new Date("1991-07-20T12:30:00.000Z"),
    gender: "Male",
    bio: "This is a short bio.",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cc8c6b31-bb18-43ab-8c07-8232419543f7",
    username: "novoUser",
    email: "novoemail@gmail.com",
    password: "$2b$12$QqxDZoimOfO7w8lxKed4J.k56897FD9pxja9uqTXsYoY4J4DPr.nK",
    birthdate: new Date("1989-11-05T12:30:00.000Z"),
    gender: "Male",
    bio: "Short bio",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ced9a01a-f573-4b2f-a271-2d6b57561f5b",
    username: "Vinciius",
    email: "vinicius@gmail.com",
    password: "$2b$12$5ItDOCmFXffrLqIjB16wc.vLfYhgb1p1/PzWG87Qa6rKgr80ZqDDC",
    birthdate: new Date("1992-04-25T12:30:00.000Z"),
    gender: "Male",
    bio: "This is a short bio.",
    photos: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function userId() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserCarousel users={users} />
    </div>
  );
}
