import Link from "next/link";
import {useEffect} from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log("Returning To Home");
        setTimeout(() => {
            router.push('/');
        }, 5000)

    }, [])


    return ( 
        <div className="not-found">
            <h1>Oh No</h1>
            <h2>The page you are looking for does not exist.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>

        </div>

     );
}
 
export default NotFound;