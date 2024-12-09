import Link from "next/link"

export default function Header(){
    return(
        <div className="header">      
            <ul className="header-button">
                <Link href={"/"}><li><b>Home</b></li></Link>
                <Link href={"/about"}><li><b>About</b></li></Link>
                <Link href={"/contact-us"}><li><b>Contact us</b></li></Link>
                <Link href={"/portfolio"}><li><b>Portfolio</b></li></Link>
            </ul>
        </div>
    )
}