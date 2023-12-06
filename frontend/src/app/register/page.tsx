export default function Register() {
    // {
    //     "username": "tallys",
    //     "email": "tallys@gmail.com",
    //     "password": "1234",
    //     "birthdate": "2022-11-18T12:30:00Z",
    //     "gender": "Male",
    //     "bio": "This is a short bio.",
    //     "photos": "url_to_photo1"
    //   }
    return (
        <main className="flex flex-col items-center justify-between md:p-16 lg:p-24 pt-20 md:pt-32 text-white bg-gradient-to-tr dark:from-gray-800 dark:to-black-700">
            <h1>Bem vindo ao Cadastro no .Lov3</h1>
            <form action="/login" className="mt-8 grid grid-cols-2 gap-4 text-gray-900">
                <div>
                    <label htmlFor="username" className="text-xl text-white">Nome de usuario</label>
                    <input type="text" placeholder="Nome de Usuario" className="p-3 rounded-full text-center" />
                </div>

                <div>
                    <label htmlFor="email" className="text-xl text-white">Email</label>
                    <input type="email" placeholder="exemplo@email.com" className="p-3 rounded-full text-center" />
                </div>

                <div>
                    <label htmlFor="password" className="text-xl text-white">Senha: </label>
                    <input type="password" placeholder="Senha" className="p-3 rounded-full text-center" />
                </div>

                <div>
                    <label htmlFor="password" className="text-xl text-white">Confirme a Senha</label>
                    <input type="password" placeholder="Confirme a Senha" className="p-3 rounded-full text-center" />
                </div>

                <div>
                    <label htmlFor="birthdate" className="text-xl text-white">Data de Nascimento: </label>
                    <input type="date" placeholder="Data de Nascimento" className="p-3 rounded-full text-center" />
                </div>

                <div>
                    <label htmlFor="" className="text-xl text-white">Genero: </label>
                    <div className="flex gap-4">
                    <input type="checkbox" name="gender" id="male" />
                    <label htmlFor="male" className="text-xl text-white">Masculino</label>
                    <input type="checkbox" name="gender" id="female" />
                    <label htmlFor="female" className="text-xl text-white">Feminno</label>
                    <input type="checkbox" name="gender" id="not" />
                    <label htmlFor="not" className="text-xl text-white">Não informar</label>
                    </div>
                </div>
                <button type="submit" className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-tl from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-300">Cadastre-se</button>
            </form>
        </main>
    );
}