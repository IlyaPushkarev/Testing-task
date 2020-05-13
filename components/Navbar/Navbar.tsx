import React from "react";
import Link from "next/link";
import styled from 'styled-components'

const Nav_Item = styled.div`
    padding: 0 0.5rem;
    margin-right: 2rem;
    font-size: 20px;
    `;
const Nav = styled.nav`
  display: flex;
  padding: 1rem 2rem;
  background: #f3f3f3;
  &:hover ${Nav_Item}{
    color: palevioletred}
`;

const MyA = styled.a`
    text-decoration: none;
    color: black;
    border-bottom: 1px solid transparent;
    &:hover{
        color: palevioletred;
        border-bottom: 1px solid palevioletred;
        cursor: pointer;
    }
    `;

const Navbar = () => {

    return (
        <Nav>
            <Nav_Item>
                <Link href="/"><MyA>Home</MyA></Link>
            </Nav_Item>
            <Nav_Item>
                <Link href="/posts/new"><MyA>Create post</MyA></Link>
            </Nav_Item>
        </Nav>
    )
}

export default Navbar;