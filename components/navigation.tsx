import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="light-bg sticky shadow-md top-0 z-50 dark:nav-footer dark:text light-text transition delay-100">
            <div className="p-4 space-x-4">
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
            </div>
        </nav>
    )
}