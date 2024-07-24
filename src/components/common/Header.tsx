'use client';
import useAxios from '@/hooks/customs/useAxios';
import endpoints from '@/services/endpoints';
import { TCategory } from '@/types/Category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
	const pathname = usePathname();
	const { data, isLoading } = useAxios(endpoints['categories']);
	
	if (isLoading) {
		return <p>Loading...</p>;
	}

	const categories: TCategory[] = data || [];

	return (
		<header>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				data-bs-theme='dark'>
				<Container>
					<Link
						href='/'
						className='navbar-brand'>
						eBlog 📮
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<NavDropdown
								title='Categories'
								id='collapsible-nav-dropdown'>
								{categories?.map(
									(category: TCategory) => (
										<Link
											key={
												category.slug
											}
											className={`dropdown-item ${
												pathname ===
												`/categories/${category.slug}`
													? 'active'
													: ''
											}`}
											href={`/categories/${category.slug}`}>
											{
												category.name
											}
										</Link>
									),
								)}
							</NavDropdown>
							<Link
								className={`nav-link ${
									pathname === '/posts'
										? 'active'
										: ''
								}`}
								href='/posts'>
								Posts
							</Link>
						</Nav>
						<Nav>
							<Link
								className='nav-link'
								href='/sign-in'>
								Sign In
							</Link>
							<Link
								className='nav-link'
								href='/sign-up'>
								Sign Up
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
