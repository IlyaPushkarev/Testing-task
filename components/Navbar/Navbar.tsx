import React from "react";
import Link from "next/link";
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  padding: 1rem 2rem;
  background: #f3f3f3;
`;
const Nav_Item = styled.div`
    padding: 0 0.5rem;
    margin-right: 2rem;
    `;
/*const MyA = styled.a`
    text-decoration: none;
    color: black;
    border-bottom: 1px solid black;
    `;*/

const Navbar = () => {

    return (
        <Nav>
            <Nav_Item>
                <Link href="/"><a>Home</a></Link>
            </Nav_Item>
            <Nav_Item>
                <Link href="/posts/new"><a>Create post</a></Link>
            </Nav_Item>
        </Nav>
    )
}

export default Navbar;