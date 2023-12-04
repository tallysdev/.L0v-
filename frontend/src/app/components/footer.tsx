import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gradient-to-tr dark:from-gray-800 dark:to-black-700 flex-col items-center justify-evenly p-8 md:p-16 lg:p-16 pt-20 md-pt-32 text-white text-center text-2xl relative">
      <div className="flex flex-col items-center lg:flex-row md:  sm:flex-col justify-evenly w-full gap-4 lg:gap-96 md:gap-12">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={130}
          height={130}
          className=""
        />
        <div className="mb-4 flex-col items-center md:items-start md:flex-row gap-4 md:mt-0">
          <span className="mb-2">
            Developed with
            <Image
              src="/heart.svg"
              alt="heart"
              width={30}
              height={30}
              className="inline mr-2 ml-2 mx-2"
            />
            by:
          </span>
          <div className="flex-col items-center">
            <div className="flex items-center flex-wrap gap-4 mt-4 md:mt-4 sm:mt-6 md:flex-row">
              <span className="ml-2 mb-2 md:mb-0">Vinicius</span>
              <Link href="https://github.com/ViniciusMaiaM" target="_blank">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/viniciusmaiam"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
              <Link href="https://twitter.com/viniciusoto" target="_blank">
                <Image
                  src="/x.svg"
                  alt="Twitter"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center flex-wrap gap-4 mt-4 md:mt-4 sm:mt-6 ">
              <span className="ml-2 mb-2 md:mb-0">Tallys</span>
              <Link
                href="https://github.com/tallys-dev"
                target="_blank"
                className="ml-6"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
              <Link href="https://linkedin.com/in/tallysdev/" target="_blank">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
              <Link href="https://twitter.com/TallysAureliano" target="_blank">
                <Image
                  src="/x.svg"
                  alt="Twitter"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center flex-wrap gap-4 mt-4 md:mt-4 sm:mt-6 ">
              <span className="ml-2 mb-2 md:mb-0">Paulo</span>
              <Link
                href="https://linkedin.com/in/paulobrito19/"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                  className="mr-2 cursor-pointer ml-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
