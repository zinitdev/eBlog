import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            &copy; {new Date().getFullYear()} by <Link href={'github.com/zinitdev'}>ZIN</Link>.
        </footer>
    )
}

export default Footer