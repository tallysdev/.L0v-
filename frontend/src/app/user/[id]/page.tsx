import { UserPage } from "./components/user_page";

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

const newUser: User = {
  id: "1",
  username: "Vinicius",
  email: "vinicius@gmail.com",
  password: "123",
  birthdate: new Date(),
  gender: "Male",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, ex at mollis faucibus, enim enim laoreet nisl, ut placerat quam massa sed arcu. Proin ultrices, justo sit amet luctus blandit, elit nunc eleifend ligula, rhoncus tempor turpis sapien quis purus. Duis posuere fermentum ligula, in fringilla sem vehicula et. In iaculis pharetra nulla tristique venenatis. ",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function userId() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserPage user={newUser} />
    </div>
  );
}
