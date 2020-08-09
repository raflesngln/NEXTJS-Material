
import Link from 'next/link'
import { useRouter } from "next/router";

const menus=[
  {id:1,title:'Home',site:'/'},
  {id:2,title:'About',site:'/store/contoh/about'},
  {id:3,title:'Profile',site:'/store/contoh/profile'},
]

const ActiveLink = ({ children, href, className }) => {

  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? "text-gray-900 border-gray-800"
            : "text-gray-600 hover:text-gray-700 border-transparent"
        } ${className} block pb-4 font-semibold text-sm sm:text-base border-b-2 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const  Menulayout=({ children })=>{
  console.log(children)
  return(
    <>
  <h1>MENU </h1>
  <div>
  <ul>
        {
          menus.map((val,idx)=>{
            let uri=val.site;
            return(
              <ActiveLink href={`${val.site}`}>{val.title} || </ActiveLink>
            );
          })
        }
     
    </ul>
  </div>
      {children}
    </>
  );
}

export default Menulayout